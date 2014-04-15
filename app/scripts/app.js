'use strict';

angular
  .module('conditionalModalApp', [
    'ngRoute',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/people/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
