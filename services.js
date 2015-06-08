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
      TICKET_STATUSES: {
        OPEN: 'open',
        RESOLVED: 'resolved',
        CLOSED: 'closed',
        REOPENED: 'reopened',
        ONHOLD: 'onhold',
        OVERDUE: 'overdue'
      },
      FAQ_CATEGORIES_STATUSES: {
        ACTIVE: 'active',
        INACTIVE: 'inactive'
      },
      JOIN_CONDITIONS: {
        AND: 'AND',
        OR: 'OR'
      },
      TICKET_ACTIONS: {
        ASSIGN: 'assign',
        CHANGE_STATUS: 'changestatus',
        CHANGE_PRIORITY: 'changepriority',
        CHANGE_CATEGORY: 'changecategory',
        TRANSFER: 'transfer',
        ADD_NOTES: 'addnotes',
        RESPONSE: 'response'
      },
      TICKET_PRIORITIES: {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high',
        EMERGENCY: 'emergency'
      },
      TICKET_SOURCES: {
        WEB: 'web',
        EMAIL: 'email',
        MOBILE: 'mobile',
        PHONE: 'phone',
        API: 'api',
        WALKIN: 'walkin',
        OTHER: 'other'
      },
      SEARCH_OPERATORS: {
        CONTAINS: 'CONTAINS',
        EQUALS: 'EQUALS',
        GREATER_THAN: 'GREATER_THAN',
        GREATER_THAN_EQUALS: 'GREATER_THAN_EQUALS',
        LESS_THAN: 'LESS_THAN',
        IN: 'IN',
        LESS_THAN_EQUALS: 'LESS_THAN_EQUALS',
        STARTS_WITH: 'STARTS_WITH',
        ENDS_WITH: 'ENDS_WITH',
        NOT_EQUALS: 'NOT_EQUALS',
        NULL_OR_EMPTY: 'NULL_OR_EMPTY',
        BETWEEN: 'BETWEEN'
      },
      SERVICES: {
        Faqs: 'Faqs',
        Tickets: 'Tickets',
        TicketCategories: 'TicketCategories',
        Auth: 'Auth',
        TicketActions: 'TicketActions',
        Surveys: 'Surveys',
        TimeTable: 'TimeTable',
        Students: 'Students',
        Contacts: 'Contacts',
        ApplicationConfiguration:'ApplicationConfiguration',
        FaqCategories: 'FaqCategories',
        Maps: 'Maps',
        Sections: 'Sections',
        Posts: 'Posts',
        Events: 'Events',
        Staffs: 'Staffs',
        Departments: 'Departments',
        Teams: 'Teams',
        Roles: 'Roles',
        RolePermissions: 'RolePermissions',
        UserRoles: 'UserRoles',
        Slas: 'Slas',
        Profiles: 'Profiles',
        UserProfiles: 'UserProfiles',
        UserProfileRecords: 'UserProfileRecords'
      },
      STATUSES: {
        ACTIVE: "active",
        INACTIVE: "inactive",
        PENDING_APPROVAL: "pendingapproval"
      },
      PERMISSIONS : {
        FAQ: {
          CREATE:   'create_faq',
          EDIT:     'edit_faq',
          APPROVE:  'approve_faq',
          UPLOAD:   'upload_faq',
          DELETE:   'delete_faq',
          LIST_PENDING_APPROVAL_FAQS: 'list_pending_approval_faqs'
        },
        FAQ_CATEGORY: {
          CREATE: 'create_faq_category',
          VIEW:   'view_faq_category',
          LIST:   'list_faq_category',
          EDIT:   'edit_faq_category',
          DELETE: 'delete_faq_category'
        },
        TICKET_CATEGORY: {
          CREATE: 'create_ticket_category',
          VIEW:   'view_ticket_category',
          LIST:   'list_ticket_category',
          EDIT:   'edit_ticket_category',
          DELETE: 'delete_ticket_category'
        },
        EVENT: {
          CREATE:       'create_event',
          DELETE:       'delete_event',
          EDIT:         'edit_event',
          APPROVE:      'approve_event',
          LIST_INVITEES: 'list_invitees'
        },
        DASHBOARD: {
          VIEW: 'view_dashboard'
        },
        MAP: {
          CREATE:   'create_map',
          LIST:     'list_maps',
          VIEW:     'view_map',
          EDIT:     'edit_map',
          DELETE:   'delete_map',
          APPROVE:  'approve_map'
        },
        CONTENT: {
          CREATE_SECION:      'create_section',
          VIEW_SECTION:       'view_section',
          LIST_SECTIONS:      'list_sections',
          EDIT_SECTION:       'edit_section',
          APPROVE_SECTION:    'approve_section',
          POST_TO_SECTION:    'post_to_section',
          VIEW_SECTION_POSTS: 'view_section_posts'
        },
        COMMUNITY: {
          LIST: 'list_communities',
          VIEW: 'view_community',
          MODERATE: 'moderate_communities',
        },
        STAFF: {
          CREATE: 'create_staff',
          LIST: 'list_staff',
          VIEW: 'view_staff',
          EDIT: 'edit_staff',
          UPLOAD: 'upload_staff'
        },
        DEPARTMENT: {
          CREATE: 'create_department',
          LIST: 'list_departments',
          VIEW: 'view_department',
          EDIT: 'edit_department',
          DELETE: 'delete_department',
          UPLOAD: 'upload_departments'
        },
        TEAM: {
          CREATE: 'create_team',
          LIST:   'list_teams',
          VIEW:   'view_team',
          EDIT:   'edit_team',
          DELETE: 'delete_team',
          UPLOAD: 'upload_teams'
        },
        STUDENT: {
          CREATE: 'create_student',
          LIST:   'list_students',
          VIEW:   'view_student',
          EDIT:   'edit_student',
          DELETE: 'delete_student',
          UPLOAD: 'upload_students'
        },
        STUDENT_PROFILE: {
          CREATE: 'create_student_profile',
          LIST:   'list_student_profiles',
          VIEW:   'view_student_profile',
          EDIT:   'edit_student_profile',
          UPLOAD: 'upload_student_profiles'
        },
        ROLE: {
          CREATE: 'create_role',
          LIST:   'list_roles',
          DELETE: 'delete_role',
          EDIT:   'edit_role'
        },
        SLA: {
          CREATE_SLA: 'create_sla',
          LIST_SLAS: 'list_slas',
          EDIT_SLA: 'edit_sla',
          DELETE_SLA: 'delete_sla'
        },
        USER_ROLE: {
          LIST: 'list_user_roles',
          ADD: 'add_role_to_user',
          DELETE: 'delete_user_roles',
          LIST_PERMISSIONS: 'list_user_permissions',
          ADD_PERMISSIONS: 'add_permission_to_role',
          UPDATE_PERMISSIONS: 'update_role_permissions'
        }
      }
    })
    .factory('ServicesResolver',['ENVIRONMENT', 'DEFAULT_ENVIRONMENTS', '$injector', 'APP_CONSTANTS', function(ENVIRONMENT, DEFAULT_ENVIRONMENTS, $injector, APP_CONSTANTS) {
      var service = {};
      service.getService = function(serviceName) {
        if(APP_CONSTANTS.SERVICES[serviceName]) {
          var mockName = serviceName + 'Mock', productionName = serviceName + 'Production';
          if(ENVIRONMENT === DEFAULT_ENVIRONMENTS.DEV) {
            return $injector.get(mockName);
          } else if(ENVIRONMENT === DEFAULT_ENVIRONMENTS.DEV || DEFAULT_ENVIRONMENTS.PRODUCTION) {
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
      service.error = function(error, message) {
        message = message || 'Error ';
        $log.error('[ENVIRONMENT ' + ENVIRONMENT + '] ' + message + ' [ ' + angular.toJson(error.data || error) + ' ]');
      };
      return service;
    }])
    .service('ProfilesMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.getUserProfile = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getUserProfiles.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying User Profile');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.fetchAndSaveUserProfile = function() {
        this.getUserProfile().then(function(profile){
          ApplicationStorage.storeUserProfile(profile);
        });
      };
      service.can = function(permission) {
        return _.indexOf(ApplicationStorage.getUserProfile().permissions, permission) !== -1;
      };
      return service;
    }])
    .service('ProfilesProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.getUserProfile = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/profiles/me',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying User Profile');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.fetchAndSaveUserProfile = function() {
        this.getUserProfile().then(function(profile){
          ApplicationStorage.storeUserProfile(profile);
        });
      };
      service.can = function(permission) {
        return _.indexOf(ApplicationStorage.getUserProfile().permissions, permission) !== -1;
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
        $http.get(BASE_DEV_URL + '/auth.json').then(function(payload) {
          ApplicationStorage.storeJwtToken(payload.data.data[0].token, credentials.rememberMe);
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
            emailId: credentials.emailId,
            password: credentials.password
          }
        };
        $http(req).then(function(payload) {
          ApplicationStorage.storeJwtToken(payload.data.data[0].token, credentials.rememberMe);
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
    .service('TicketsMock', ['BASE_DEV_URL', '$q', '$http', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $q, $http, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getTickets.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching tickets');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createTickets.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating ticket');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryTickets.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying tickets');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.createSurvey = function(ticket, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createSurveyTickets.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('TicketsProduction', ['BASE_URL', '$http', '$q', 'ApplicationStorage', 'APP_CONSTANTS', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, ApplicationStorage, APP_CONSTANTS, Logger, ApplicationUtil) {
      var service = {};
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/tickets/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching ticket');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/tickets',
          data: entity,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating ticket');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/tickets' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying tickets');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.createSurvey = function(ticket, entity) {
        var deferred = $q.defer();
        entity.ticketId = ticket.id;
        var req = {
          method: 'POST',
          url: BASE_URL + '/surveys',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Tickets', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Tickets);
    }])
    .service('TicketActionsProduction', ['BASE_URL', '$http', '$q', 'ApplicationStorage', 'APP_CONSTANTS', 'Logger', function(BASE_URL, $http, $q, ApplicationStorage, APP_CONSTANTS, Logger) {
      var service = {};
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/ticketActions',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('TicketActionsMock', ['BASE_DEV_URL', '$q', '$http', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $q, $http, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_DEV_URL + '/createTicketActions.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('TicketActions', ['APP_CONSTANTS', 'ServicesResolver', function(APP_CONSTANTS, ServicesResolver) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.TicketActions);
    }])
    .service('SurveysProduction', ['BASE_URL', '$q', '$http', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $q, $http, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/surveys' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying surveys');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/surveys/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/surveys',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL + '/surveys/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('SurveysMock', ['BASE_DEV_URL', '$q', '$http', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $q, $http, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/querySurveys.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying surveys');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getSurveys.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createSurveys.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateSurveys.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating survey');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Surveys', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Faqs);
    }])
    .service('FaqsMock', ['BASE_DEV_URL', '$http', '$q', 'Logger', 'APP_CONSTANTS', 'ApplicationStorage', function(BASE_DEV_URL, $http, $q, Logger, APP_CONSTANTS, ApplicationStorage) {
      var service = {};
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getFaqs.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.incrementViewCount = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/incrementFaqView.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error in increment faq view count');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryFaqs.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying faqs');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createFaqs.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateFaqs.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.delete = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/deleteFaqs.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.approve = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/approveFaqs.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error approving faqs');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.pendingApproval = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/pendingApprovalFaqs.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error approving faqs');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/bulkCreateFaq.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('FaqsProduction', ['BASE_URL', '$http', '$q', 'ApplicationStorage', 'APP_CONSTANTS', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, ApplicationStorage, APP_CONSTANTS, Logger, ApplicationUtil) {
      var service = {};
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/faqs/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.incrementViewCount = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/faqs/' + id + '/views',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error in increment faq view count');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/faqs' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faqs');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.pendingApproval = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/faqs/pendingApproval' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching pending approval faqs');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/faqs',
          data: entity,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          data: entity,
          url: BASE_URL + '/faqs/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.delete = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'DELETE',
          url: BASE_URL + '/faqs/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.approve = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/faqs/approve',
          data: entity,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error approving faqs');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/faqs/bulk',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Faq');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Faqs', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Faqs);
    }])
    .service('TimeTableMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryTimeTable.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying timetable');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getTimeTable.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching timetable');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('TimeTableProduction', ['BASE_URL', 'Logger', 'ApplicationStorage', '$q', '$http', 'APP_CONSTANTS', 'ApplicationUtil', function(BASE_URL, Logger, ApplicationStorage, $q, $http, APP_CONSTANTS, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/timetable' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying timetable');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/timetable/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying timetable');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('TimeTable', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.TimeTable);
    }])
    .service('StudentsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.me = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getStudents.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying student profile');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryStudents.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying student profile');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getStudent.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Student');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createStudent.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Student');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
        service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/bulkCreateStudent.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Student');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateStudent.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Student');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('StudentsProduction', ['BASE_URL', 'APP_CONSTANTS', 'ApplicationStorage', '$http', '$q', 'Logger', 'ApplicationUtil', function(BASE_URL, APP_CONSTANTS, ApplicationStorage, $http, $q, Logger, ApplicationUtil) {
      var service = {};
      service.me = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/students/me',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying student profile');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/students' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying student profile');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/students/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/students',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/students/bulk',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/students/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Student');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Students', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Students);
    }])
    .service('ApplicationConfigurationProduction', ['BASE_URL', 'APP_CONSTANTS', 'ApplicationStorage', '$http', '$q', 'Logger', function(BASE_URL, APP_CONSTANTS, ApplicationStorage, $http, $q, Logger) {
      return {
        refresh: function() {
          var deferred = $q.defer();
          var req = {
            method: 'GET',
            url: BASE_URL + '/configurations',
            headers: {
              'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
            }
          };
          $http(req).then(function(payload) {
            ApplicationStorage.storeConfiguration(payload.data);
            deferred.resolve(payload.data);
          }, function(reason) {
            Logger.error(reason, 'Error fetching application configuration');
            deferred.reject(reason);
          });
          return deferred.promise;
        },
        getConfiguration: function() {
          var configuration = ApplicationStorage.getConfiguration();
          var deferred = $q.defer();
          if(configuration) {
            deferred.resolve(configuration);
          } else {
            this.refresh().then(function(data) {
              deferred.resolve(data);
            }, function(reason) {
              deferred.reject(reason);
            });
          }
          return deferred.promise;
        }
      };
    }])
    .service('ApplicationConfigurationMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      return {
        refresh: function() {
          var deferred = $q.defer();
          var req = {
            method: 'GET',
            url: BASE_DEV_URL + '/getApplicationConfiguration.json',
            headers: {
              'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
            }
          };
          $http(req).then(function(payload) {
            ApplicationStorage.storeConfiguration(payload.data);
            deferred.resolve(payload.data);
          }, function(reason) {
            Logger.error(reason, 'Error fetching application configuration');
            deferred.reject(reason);
          });
          return deferred.promise;
        },
        getConfiguration: function() {
          var configuration = ApplicationStorage.getConfiguration();
          var deferred = $q.defer();
          if(configuration) {
            deferred.resolve(configuration);
          } else {
            this.refresh().then(function(data) {
              deferred.resolve(data);
            }, function(reason) {
              deferred.reject(reason);
            });
          }
          return deferred.promise;
        }
      };
    }])
    .factory('ApplicationConfiguration', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.ApplicationConfiguration);
    }])
    .service('TicketCategoriesMock',  ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryTicketCategories.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying ticket categories');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getTicketCategories.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching ticket categories');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('TicketCategoriesProduction',  ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/ticketCategories' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying ticket categories');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/ticketCategories/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching ticket category');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
           var deferred = $q.defer();
           var req = {
               method: 'POST',
               url: BASE_URL + '/ticketCategories',
               headers: {
                   'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
               },
               data: entity
           };
           $http(req).then(function(payload) {
               deferred.resolve(payload.data);
           }, function(reason) {
               Logger.error(reason, 'Error creating ticket category');
               deferred.reject(reason);
           });
           return deferred.promise;
       };
       service.update = function(id, entity) {
           var deferred = $q.defer();
           var req = {
               method: 'PUT',
               url: BASE_URL + '/ticketCategories/' + id,
               headers: {
                   'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
               },
               data: entity
           };
           $http(req).then(function(payload) {
               deferred.resolve(payload.data);
           }, function(reason) {
               Logger.error(reason, 'Error updating ticket category');
               deferred.reject(reason);
           });
           return deferred.promise;
       };
       service.delete = function(id) {
           var deferred = $q.defer();
           var req = {
               method: 'DELETE',
               url: BASE_URL + '/ticketCategories/' + id,
               headers: {
                   'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
               }
           };
           $http(req).then(function(payload) {
               deferred.resolve(payload.data);
           }, function(reason) {
               Logger.error(reason, 'Error fetching ticket category');
               deferred.reject(reason);
           });
           return deferred.promise;
       };
      return service;
    }])
    .factory('TicketCategories', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.TicketCategories);
    }])
    .service('ContactsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.get = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getContacts.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching user contacts');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('ContactsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.get = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/contacts',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching user contacts');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Contacts', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Contacts);
    }])
    .service('FaqCategoriesMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryFaqCategories.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying faq categories');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getFaqCategories.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq category');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.delete = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/deleteFaqCategories.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error deleting faq category');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createFaqCategories.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating faq category');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateFaqCategories',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating faq category');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('FaqCategoriesProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/faqCategories' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying faq categories');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/faqCategories/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching faq category');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.delete = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'DELETE',
          url: BASE_URL + '/faqCategories/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error deleting faq category');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/faqCategories',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating faq category');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL + '/faqCategories/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating faq category');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('FaqCategories', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.FaqCategories);
    }])
    .service('EventsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryEvents.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying events');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getEvent.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching event');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createEvent.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating event');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateEvent.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating event');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.pendingInvitations = function(eventId) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getPendingInvitations.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting pending invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.acceptedInvitations = function(eventId) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getAcceptedInvitations.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting accepted invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.declinedInvitations = function(eventId) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getDeclinedInvitations.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting declined invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.userPendingInvitations = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getUserPendingInvitations.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting users pending invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.userAcceptedInvitations = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getUserAcceptedInvitations.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting users accepted invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.userDeclinedInvitations = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getUserDeclinedInvitations.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting users declined invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.acceptInvitation = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/acceptInvitation.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error accepting invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.declineInvitation = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/declineInvitation.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error accepting invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('EventsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/events' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying events');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/events/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching event');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/events',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating event');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL + '/events/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating event');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.pendingInvitations = function(eventId) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/events/' + eventId + '/pending',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting pending invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.acceptedInvitations = function(eventId) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/events/' + eventId + '/accepted',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting accepted invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.declinedInvitations = function(eventId) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/events/' + eventId + '/declined',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting declined invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.userPendingInvitations = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/events/me/pending',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting users pending invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.userAcceptedInvitations = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/events/me/accepted',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting users accepted invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.userDeclinedInvitations = function() {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/events/me/declined',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error getting users declined invitations');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.acceptInvitation = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/events/me/' + id + '/accept',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error accepting invitation');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.declineInvitation = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/events/me/' + id + '/decline',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error accepting invitation');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Events', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Events);
    }])
    .factory('MapRequestTrasformer', [function(){
      return function(data) {
        // Transform the map attribute to a JSON string
        if(data && data.map) {
          data.map = JSON.stringify(data.map);
        }
        return JSON.stringify(data);
      };
    }])
    .factory('MapResponseTransformer', [function(){
      return function(data) {
        var jsonData = JSON.parse(data);
        if(jsonData.data.length){
          jsonData.data = _.map(jsonData.data, function(mapData){
            return {
                    id: mapData.id,
                    name: mapData.name,
                    description:mapData.description,
                    map: JSON.parse(mapData.map),
                    createdAt: mapData.createdAt | null,
                    updatedAt: mapData.updatedAt | null
                   };
          });
        }
        return jsonData;
      };
    }])
    .service('MapsMock',
    ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'MapRequestTrasformer', 'MapResponseTransformer',
      function (BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, MapRequestTrasformer, MapResponseTransformer) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryMaps.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying maps');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getMap.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          transformResponse: MapResponseTransformer
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching map');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createMap.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity,
          transformRequest: MapRequestTrasformer
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating map');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateMap.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity,
          transformRequest: MapRequestTrasformer
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating map');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('MapsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', 'MapRequestTrasformer', 'MapResponseTransformer', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil, MapRequestTrasformer, MapResponseTransformer) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/maps' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying maps');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/maps/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          transformResponse: MapResponseTransformer
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching map');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/maps',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity,
          transformRequest: MapRequestTrasformer
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating map');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL + '/maps/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity,
          transformRequest: MapRequestTrasformer
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating map');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Maps', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Maps);
    }])
    .service('SectionsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/querySections.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Sections');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getSection.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Section');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createSection.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Section');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateSection.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Section');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('SectionsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/sections' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Sections');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/sections/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Section');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/sections',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Section');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL + '/sections/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Section');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Sections', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Sections);
    }])
    .service('PostsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.querySectionPosts = function(sectionId) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryPosts.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Posts');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryPosts.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Posts');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getPost.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createPost.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updatePost.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('PostsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      var getSectionCriteria = function(sectionId) {
        return {
            q: JSON.stringify([{field: 'sectionId',
                              op: APP_CONSTANTS.SEARCH_OPERATORS.EQUALS,
                              value: sectionId}]),
            page: 1,
            limit: 10,
            order: APP_CONSTANTS.SORTING_ORDER.DESCENDING,
            orderBy: 'createdAt'
        };
      };
      service.querySectionPosts = function(sectionId) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/posts' + '?' + ApplicationUtil.parseQueryCriteria(getSectionCriteria(sectionId)),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Posts');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/posts' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Posts');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/posts/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/posts',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL + '/posts/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Posts', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Posts);
    }])
    .service('StaffsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryStaffs.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getStaff.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createStaff.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
        service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/bulkCreateStaff.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateStaff.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.getRoles = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL +  '/getRoles.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.updateRoles = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL +  '/updateRoles.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('StaffsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/staffs' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/staffs/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/staffs',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/staffs/bulk',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/staffs/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.getRoles = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL +  '/staffs/' + id + '/roles',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.updateRoles = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL +  '/staffs/' + id + '/roles',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Staff');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Staffs', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Staffs);
    }])
    .service('DepartmentsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryDepartments.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Departments');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getDepartment.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Department');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createDepartment.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Department');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
        service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/bulkCreateDepartment.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Department');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateDepartment.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Department');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('DepartmentsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/departments' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Departments');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/departments/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/departments',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/departments/bulk',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/departments/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Departments');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Departments', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Departments);
    }])
    .service('TeamsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryTeams.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Teams');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getTeam.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Team');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createTeam.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Team');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
        service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/bulkCreateTeam.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Team');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateTeam.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Team');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('TeamsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/teams' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Teams');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/teams/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/teams',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/teams/bulk',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/teams/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Teams');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Teams', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Teams);
    }])
    .service('RolesMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryRoles.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Roles');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getRole.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Role');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createRole.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Role');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateRole.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Role');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.updatePermission = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updatePermission.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating role permissions');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('RolesProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/roles' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Roles');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/roles/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/roles',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/roles/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Roles');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.updatePermission = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/roles/' + id + '/permissions',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating role permissions');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Roles', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Roles);
    }])
    .service('RolePermissionsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryRolePermissions.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying RolePermissions');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getRolePermissions.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching RolePermissions');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createRolePermissions.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating RolePermissions');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateRolePermissions.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating RolePermissions');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('RolePermissionsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/rolePermissions' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying RolePermissions');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/rolePermissions/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/rolePermissions',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/rolePermissions/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating RolePermissions');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('RolePermissions', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.RolePermissions);
    }])
    .service('UserRolesMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryUserRoles.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying UserRoles');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getUserRole.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching UserRole');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createUserRole.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating UserRole');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateUserRole.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating UserRole');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('UserRolesProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/userRoles' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying UserRoles');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/userRoles/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/userRoles',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/userRoles/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating UserRoles');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('UserRoles', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.UserRoles);
    }])
    .service('SlasMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/querySlas.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Slas');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getSla.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching sla');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createSla.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating sla');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateSla.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating sla');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('SlasProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/slas' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying Slas');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/slas/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/slas',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/slas/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating Slas');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('Slas', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.Slas);
    }])
    .service('UserProfilesMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryUserProfiles.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying UserProfiles');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getUserProfile.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching UserProfile');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createUserProfile.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating UserProfile');
          deferred.reject(reason);
        });
        return deferred.promise;
      };


      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateUserProfile.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating UserProfile');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('UserProfilesProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/userProfiles' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying UserProfiles');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/userProfiles/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/userProfiles',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };

      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/userProfiles/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating UserProfiles');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('UserProfiles', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.UserProfiles);
    }])
    .service('UserProfileRecordsMock', ['BASE_DEV_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', function(BASE_DEV_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/queryUserProfileRecords.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying UserProfileRecords');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/getUserProfileRecord.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching UserProfileRecord');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/createUserProfileRecord.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating UserProfileRecord');
          deferred.reject(reason);
        });
        return deferred.promise;
      };

        service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/bulkCreateUserProfileRecord.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating UserProfileRecord');
          deferred.reject(reason);
        });
        return deferred.promise;
      };

      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_DEV_URL + '/updateUserProfileRecord.json',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating UserProfileRecord');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .service('UserProfileRecordsProduction', ['BASE_URL', '$http', '$q', 'APP_CONSTANTS', 'ApplicationStorage', 'Logger', 'ApplicationUtil', function(BASE_URL, $http, $q, APP_CONSTANTS, ApplicationStorage, Logger, ApplicationUtil) {
      var service = {};
      service.query = function(queryCriteria) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/userProfileRecords' + '?' + ApplicationUtil.parseQueryCriteria(queryCriteria),
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error querying UserProfileRecords');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.get = function(id) {
        var deferred = $q.defer();
        var req = {
          method: 'GET',
          url: BASE_URL + '/userProfileRecords/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          }
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error fetching Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      service.create = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/userProfileRecords',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };

      service.bulkCreate = function(entity) {
        var deferred = $q.defer();
        var req = {
          method: 'POST',
          url: BASE_URL + '/userProfileRecords/bulk',
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error creating Post');
          deferred.reject(reason);
        });
        return deferred.promise;
      };

      service.update = function(id, entity) {
        var deferred = $q.defer();
        var req = {
          method: 'PUT',
          url: BASE_URL +  '/userProfileRecords/' + id,
          headers: {
            'Authorization': APP_CONSTANTS.STRATAGIES.BEARER + ' ' + ApplicationStorage.getJwtToken()
          },
          data: entity
        };
        $http(req).then(function(payload) {
          deferred.resolve(payload.data);
        }, function(reason) {
          Logger.error(reason, 'Error updating UserProfileRecords');
          deferred.reject(reason);
        });
        return deferred.promise;
      };
      return service;
    }])
    .factory('UserProfileRecords', ['ServicesResolver', 'APP_CONSTANTS', function(ServicesResolver, APP_CONSTANTS) {
      return ServicesResolver.getService(APP_CONSTANTS.SERVICES.UserProfileRecords);
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
