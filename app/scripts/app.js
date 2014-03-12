'use strict';

Parse.initialize("1oA8NuZk07HxiFfGo3CcJk7hxs12DKJFLIxr1uUl", "YldusaJJ0XAlyRMYcamxoxlqRhoziU0sVWF9mGyy");

//alert("Looks like thus change stayed");


// some global setup variables

var backendType = "static";

var myTssApp = angular.module('tssApp', [
        'ui',
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

myTssApp.factory('getBooksFactory',function() { // Note over here can inject stuff. FOr exaplne function ($http) () can now use angulars http object to get and post to restful apis
var books = [
    {author: "Kendall", title: "Kendall is a superhero", location: "Los Angeles", date: "1288323623006"},
    {author: "Elizabeth", title: "Liz is a sexy", location: "Los Mantra", date: "091082"},
    {author: "Oliver", title: "Oli was born genius", location: "San Fransico", date: "091011"},
    {author: "Kendall", title: "Kendall is a superhero", location: "Portlan", date: "090913"}
];

    var factory = {};

    factory.getBooks = function () {
        return books;
    }

    return factory;
})
