var app = angular.module('myApp', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/new', {
      templateUrl: 'new.html',
      controller: 'CtrlNew'
    })
    .when('/list', {
      templateUrl: 'list.html',
      controller: 'CtrlList',
      resolve : {
        listFromRouting : function ( Todo ) {
          return Todo.query({});
        }
      }
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'CtrlAbout'
    })
    .otherwise({
      redirectTo: '/list'
    });
});