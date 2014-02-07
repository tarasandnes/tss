'use strict';

Parse.initialize("1oA8NuZk07HxiFfGo3CcJk7hxs12DKJFLIxr1uUl", "YldusaJJ0XAlyRMYcamxoxlqRhoziU0sVWF9mGyy");

alert("Looks like thus change stayed");

angular.module('tssApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
