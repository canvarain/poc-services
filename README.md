# Common angular services for ```billid``` browser and mobile application

### How to install?

Install using bower
```
bower install https://github.com/billidin/poc-services
```
That's it, you don't have to anything else.

### How to use?
Include the ```services.min.js``` in main index.html.

```
<script src="bower_components/poc-services/dist/services.min.js" type="text/javascript"></script>
```

Add ```billidpoc``` as the dependency to your angular app.

```
var app = angular.app('myApp', ['billidpoc']);
```
