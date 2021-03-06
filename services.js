(function(angular) {
  'use strict';
  // Modules
  angular.module('billidpoc', ['billidpoc.services','billidpoc.auth-services', 'angular-storage']);
  angular.module('billidpoc.services', [])
    .constant('DEFAULT_ENVIRONMENTS', {
      DEV: 'DEV',
      PRODUCTION: 'PRODUCTION',
      STAGING: 'STAGING'
    })
    .constant('APP_CONSTANTS', {
      MAX_LIMIT: -1,
      JWT_TOKEN_KEY: 'billidpoc.app.auth.token',
      APPLICATION_CONFIGURATION_KEY: 'billidpoc.app.config',
      USER_PROFILE_KEY: 'billidpoc.app.profile',
      STRATAGIES: {
        BEARER: 'Bearer'
      },
      TITLES : {
        MR: 'Mr',
        MS: 'Ms',
        MRS: 'Mrs',
        MISS: 'Miss',
        DR: 'Dr',
        PROF: 'Prof',
        REV: 'Rev',
        SIR: 'Sir',
        OTHER: 'Other'
      },
      SORTING_ORDER: {
        ASCENDING: 'ASC',
        DESCENDING: 'DESC'
      },
      SERVICES: {
        Receipts: 'Receipts',
        Profiles: 'Profiles',
        Auth: 'Auth',
        Registration: 'Registration',
        Organizations: 'Organizations'
      },
      USER_TYPES: {
        staff: 'BUSINESS_EMPLOYEE',
        customer: 'INDIVIDUAL',
        both: 'BOTH'
      },
      ANDROID_NOTIFICATION_EVENT_TYPES: {
        registered: 'registered',
        message: 'message',
        error: 'error'
      },
      DEVICE_TYPES: {
        android: 'ANDROID',
        ios: 'IOS'
      },
      GCM_SENDER_ID: '675017893424'
    })
    .factory('RequestHelper', ['$q', '$http', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger',
      function( $q, $http, APP_CONSTANTS, ApplicationStorage, Logger){
        var service = {};
        var defaultMethod  = 'GET';

        /**
        * Creates a request object for an ajax call ($http)
        * @param {object} options
        * @returns an object containing the request attributes
        */
        service.createRequest = function(options) {
          var defaultHeader = {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          };
          // Options must exist and it should contain the url attribute
          if(!options) {
            throw new Error(' empty options found for createRequest');
          }

          // check that the options has URL
          if(!options.url) {
            throw new Error(' no url found for createRequest');
          }

          var method =  options.method || defaultMethod,
              headers = options.headers || defaultHeader;

          var req = {
            method: method,
            url : options.url,
            headers: headers
          };

          // Add the data if available
          if(options.data) {
            req.data = options.data;
          }
          return req;
        };

        /**
        * executes a http request based in the options passed in
        * uses createRequest method to create the request
        * @param {object} options
        * @returns a promise which will resolve into the http response
        */
        service.execute = function(options) {
          var deferred = $q.defer(),
          req = service.createRequest(options);

          $http(req).then(function(payload) {
            deferred.resolve(payload.data);
          }, function(reason) {
            Logger.error(reason, 'error executing ' + JSON.stringify(req));
            deferred.reject(reason);
          });

          return deferred.promise;
        };

        return service;
    }])
    .factory('ServicesResolver',['ENVIRONMENT', 'DEFAULT_ENVIRONMENTS', '$injector', 'APP_CONSTANTS', function(ENVIRONMENT, DEFAULT_ENVIRONMENTS, $injector, APP_CONSTANTS) {
      var service = {};
      service.getService = function(serviceName) {
        if(APP_CONSTANTS.SERVICES[serviceName]) {
          var mockName = serviceName + 'Mock', productionName = serviceName + 'Production';
          if(ENVIRONMENT === DEFAULT_ENVIRONMENTS.DEV) {
            return $injector.get(mockName);
          } else if(ENVIRONMENT === DEFAULT_ENVIRONMENTS.STAGING || DEFAULT_ENVIRONMENTS.PRODUCTION) {
            return $injector.get(productionName);
          } else {
            throw new Error(ENVIRONMENT + ' environment is not supported');
          }
        } else {
          throw new Error('Invalid service name ' + serviceName);
        }
      };
      return service;
    }])
    .factory('ApplicationStorage', ['store', 'APP_CONSTANTS', function(store, APP_CONSTANTS) {
      var service = {};
      /**
       * Store token in service variable when rememberMe is false
       * @type {String}
       */
      service.token = '';
      service.getJwtToken = function() {
        return this.token ? this.token : store.get(APP_CONSTANTS.JWT_TOKEN_KEY);
      };
      service.storeJwtToken = function(token, rememberMe) {
        // if remember me then store the token in local storage
        if(rememberMe) {
          store.set(APP_CONSTANTS.JWT_TOKEN_KEY, token);
        }
        this.token = token;
      };
      service.storeConfiguration = function(configuration) {
        store.set(APP_CONSTANTS.APPLICATION_CONFIGURATION_KEY, configuration);
      };
      service.storeUserProfile = function(profile) {
        store.set(APP_CONSTANTS.USER_PROFILE_KEY, profile);
      };
      service.getConfiguration = function() {
        return store.get(APP_CONSTANTS.APPLICATION_CONFIGURATION_KEY);
      };
      service.getUserProfile = function() {
        return store.get(APP_CONSTANTS.USER_PROFILE_KEY);
      };
      service.clear = function() {
        store.remove(APP_CONSTANTS.JWT_TOKEN_KEY);
        store.remove(APP_CONSTANTS.USER_PROFILE_KEY);
      };
      return service;
    }])
    .factory('ApplicationUtil', [function(){
      var service = {};
      service.parseQueryCriteria = function(queryCriteria) {
        var criterias = [];
        if(queryCriteria.q) {
          criterias.push('q=' + queryCriteria.q);
        }
        if(queryCriteria.limit) {
          criterias.push('limit=' + queryCriteria.limit);
        }
        if(queryCriteria.page) {
          criterias.push('page=' + queryCriteria.page);
        }
        if(queryCriteria.order) {
          criterias.push('order=' + queryCriteria.order);
        }
        if(queryCriteria.orderBy) {
          criterias.push('orderBy=' + queryCriteria.orderBy);
        }
        if(queryCriteria.joinCondition) {
          criterias.push('joinCondition=' + queryCriteria.joinCondition);
        }
        return criterias.join('&');
      };
      return service;
    }])
    .factory('Logger', ['$log', 'ENVIRONMENT', function($log, ENVIRONMENT) {
      var service = {};
      service.info = function(data, message) {
        message = message || 'Success ';
        $log.info('[ENVIRONMENT ' + ENVIRONMENT + '] ' + message + ' [ ' + angular.toJson(data) + ' ]');
      };
      service.error = function(error, message) {
        message = message || 'Error ';
        $log.error('[ENVIRONMENT ' + ENVIRONMENT + '] ' + message + ' [ ' + angular.toJson(error.data || error) + ' ]');
      };
      return service;
    }])
    .service('ProfilesMock', ['BASE_DEV_URL', '$http', '$q', 'RequestHelper', 'Logger',
      function(BASE_DEV_URL, $http, $q, RequestHelper, Logger) {
        var service = {};
        service.getUserProfile = function() {
          return RequestHelper.execute ({
            url: BASE_DEV_URL + '/getUserProfileProfiles.json'
          });
        };

        service.fetchAndSaveUserProfile = function() {
          this.getUserProfile().then(function(profile){
            ApplicationStorage.storeUserProfile(profile);
          });
        };

        service.updateDevice = function(deviceId, type) {
          return RequestHelper.execute ({
            url: BASE_DEV_URL + '/updateDeviceProfiles.json'
          });
        };

        service.removeDevice = function(deviceId) {
          return RequestHelper.execute ({
            url: BASE_DEV_URL + '/removeDeviceProfiles.json'
          });
        };
        return service;
    }])
    .service('ProfilesProduction', ['BASE_URL', '$http', '$q', 'RequestHelper', 'Logger', 'ApplicationUtil', 'ApplicationStorage',
      function(BASE_URL, $http, $q, RequestHelper, Logger, ApplicationUtil, ApplicationStorage) {
        var service = {};

        service.getUserProfile = function() {
          return RequestHelper.execute({
            url: BASE_URL + '/me'
          });
        };

        service.fetchAndSaveUserProfile = function() {
          this.getUserProfile().then(function(profile){
            ApplicationStorage.storeUserProfile(profile);
          });
        };

        service.updateDevice = function(deviceId, type) {
          Logger.info({}, 'Updating device info');
          var profile = ApplicationStorage.getUserProfile();
          return RequestHelper.execute({
            url: BASE_URL + '/users/' + profile.id + '/updateDevice',
            method: 'POST',
            data: {
              deviceId: deviceId,
              deviceType: type
            }
          });
        };

        service.removeDevice = function(deviceId) {
          Logger.info({}, 'Removing device info');
          var profile = ApplicationStorage.getUserProfile();
          return RequestHelper.execute({
            url: BASE_URL + '/users/' + profile.id + '/removeDevice',
            method: 'POST',
            data: {
              deviceId: deviceId
            }
          });
        };
        return service;
    }])
    .factory('Profiles', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Profiles);
    }])
    .service('AuthMock', ['$q', '$http', 'BASE_DEV_URL', 'Logger', 'ApplicationStorage', 'Profiles', function($q, $http, BASE_DEV_URL, Logger, ApplicationStorage, Profiles) {
      var service = {};
      service.login = function(credentials) {
        var deferred = $q.defer();
        $http.get(BASE_DEV_URL + '/loginAuth.json').then(function(payload) {
          ApplicationStorage.storeJwtToken(payload.data.token, credentials.rememberMe);
          // Get the user profile and save it to local storage
          Profiles.fetchAndSaveUserProfile();
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error while authentication');
          deferred.reject(reason);
        });
        return deferred.promise;
      };

      service.logout = function() {
        ApplicationStorage.clear();
      };

      service.isAuthenticated = function() {
        var token = ApplicationStorage.getJwtToken();
        return token ? true : false;
      };

      return service;
    }])
    .service('AuthProduction', ['$http', 'Logger', '$q', 'BASE_URL', 'ApplicationStorage', 'Profiles', function($http, Logger, $q, BASE_URL, ApplicationStorage, Profiles) {
      var service = {};
      service.login = function(credentials) {
        var deferred = $q.defer();
        var req = {
          url: BASE_URL + '/users/login',
          method: 'POST',
          data: {
            email: credentials.username,
            password: credentials.password
          }
        };
        $http(req).then(function(payload) {
          ApplicationStorage.storeJwtToken(payload.data.token, credentials.rememberMe);
          // Get the user profile and save it to local storage
          Profiles.fetchAndSaveUserProfile();
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error while authentication');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.logout = function() {
        ApplicationStorage.clear();
      };
      service.isAuthenticated = function() {
        var token = ApplicationStorage.getJwtToken();
        return token ? true : false;
      };
      return service;
    }])
    .factory('Auth', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Auth);
    }])
    .service('ReceiptsMock', ['BASE_DEV_URL', 'RequestHelper',
      function(BASE_DEV_URL, RequestHelper) {
        var service = {};

      service.get = function(id) {
        return RequestHelper.execute({
          url: BASE_DEV_URL + '/getReceipts.json'
        });
      };

      service.create = function(entity) {
        return RequestHelper.execute({
          url: BASE_DEV_URL + '/createReceipts.json',
          headers: {}
        });
      };

      service.getByOrganization = function() {
        return RequestHelper.execute({
          url: BASE_DEV_URL + '/getByOrganizationReceipts.json'
        });
      };

      service.me = function() {
        return RequestHelper.execute({
          url: BASE_DEV_URL + '/meReceipts.json'
        });
      };

      return service;
    }])
    .service('ReceiptsProduction', ['BASE_URL', 'RequestHelper',
      function(BASE_URL, RequestHelper) {

      var service = {},
      serviceURL = BASE_URL + '/receipts';

      service.get = function(id) {
         return RequestHelper.execute({
          url: serviceURL + '/' + id
        });
      };

      service.create = function(entity) {

        // Note : we are sending an empty header object so that a default
        // header is not sent along with the request
        return RequestHelper.execute({
          method: 'POST',
          url: serviceURL,
          data: entity,
          headers: {}
        });
      };

      service.getByOrganization = function() {
        return RequestHelper.execute({
          url: serviceURL
        });
      };

      service.me = function() {
        return RequestHelper.execute({
          url: BASE_URL + '/me/receipts'
        });
      };

      return service;

    }])
    .factory('Receipts', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Receipts);
    }])
    .service('OrganizationsMock', ['BASE_DEV_URL', 'RequestHelper',
      function(BASE_DEV_URL, RequestHelper) {
        var service = {};

      service.get = function(id) {
        return RequestHelper.execute({
          url: BASE_DEV_URL + '/getOrganizations.json'
        });
      };

      service.create = function(entity) {
        return RequestHelper.execute({
          url: BASE_DEV_URL + '/createOrganizations.json',
          headers: {}
        });
      };

      service.query = function(queryCriteria) {
        return RequestHelper.execute({
          url: BASE_DEV_URL + '/queryOrganizations.json'
        });
      };

      service.update = function(id, entity) {
        return RequestHelper.execute({
          url: BASE_DEV_URL + '/updateOrganizations.json'
        });
      };

      return service;
    }])
    .service('OrganizationsProduction', ['BASE_URL', 'RequestHelper',
      function(BASE_URL, RequestHelper) {

      var service = {},
      serviceURL = BASE_URL + '/organizations';

      service.get = function(id) {
         return RequestHelper.execute({
          url: serviceURL + '/' + id
        });
      };

      service.create = function(entity) {
        return RequestHelper.execute({
          method: 'POST',
          url: serviceURL,
          data: entity,
          headers: {}
        });
      };

      service.query = function(queryCriteria) {
        return RequestHelper.execute({
          url: serviceURL + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria)
        });
      };

      service.update = function(id, entity) {
        return RequestHelper.execute({
          method: 'PUT',
          url : serviceURL + '/' + id,
          data: entity
        });
      };

      return service;

    }])
    .factory('Organizations', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Organizations);
    }]);

    angular.module('billidpoc.auth-services', [])
    .constant('AUTH_EVENTS', {
      loginSuccess: 'auth-login-success',
      loginFailed:  'auth-login-failed',
      logoutSuccess: 'auth-logout-success',
      sessionTimeout: 'auth-session-timeout',
      notAuthenticated: 'auth-not-authenticated',
      notAuthorized: 'auth-not-authorized'
    })
    .factory('AuthInterceptor', ['$rootScope', '$q', 'AUTH_EVENTS', function ($rootScope, $q, AUTH_EVENTS) {
      return {
        responseError: function (response) {
          $rootScope.$broadcast({
            401: AUTH_EVENTS.notAuthenticated,
            403: AUTH_EVENTS.notAuthorized
          }[response.status], response);
          return $q.reject(response);
        }
      };
  }]);
}(angular));