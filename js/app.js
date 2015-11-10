var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/list', {
      templateUrl: 'partials/list.html'
    })
    .when('/about', {
      templateUrl: 'partials/about.html'
    })
    .otherwise({
      redirectTo: '/list'
    });
});