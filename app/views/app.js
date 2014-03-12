'use strict';

Parse.initialize("1oA8NuZk07HxiFfGo3CcJk7hxs12DKJFLIxr1uUl", "YldusaJJ0XAlyRMYcamxoxlqRhoziU0sVWF9mGyy");

//alert("Looks like thus change stayed");


// some global setup variables

var backendType = "static";
var test = {};
test.yous = {};
test.yous.mes = "kfendall";

/* A module is just an object container. And off of that module/container you can
        * configure routes
        * create custom filters
        * create custom directives
        * GET data using factories, services, providers or values
        * create controllers
 */


// SO once you refernce the angular frame work you have access to the angular object.
// And there's all sorts of good stuff that hangs off of this object, like, jquery lite for DOM manipulation.
// But below, we access the module object that hangs off and start doing stuff there.

// SOme people do taaApp = angular.module('tssApp',[]); Then they can use tssApp as the main object and do everything off that.
var myTssApp = angular.module('tssApp', [ // this actually creates the tssApp module
        // This array is all about dependency injection. I.e. Our module might rely on other modules to get data
        'ui',
        'ngCookies',
        'ngResource', // modules that tssApp may rely on
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) { // config is a function. Can be used to define different routes
        $routeProvider
            .when('/', {
                templateUrl: 'views/main2.html',
                controller: 'MainCtrl' // here told which controller to use. We don;t hard code it into view. DO it right here
            })
            .when('/training', {
              templateUrl: '',
              controller: 'TrainingCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
// Note all the above syntax is using chaining. YOU FUCKING KNOW CHAINING KENDALL. Does the last thing, then the one above, and so on. COnfig, then module..etc
/*                                      +++++ SOME !KENNY! METAPHORS +++++++

Denice is a controller
Naked actress is a scope.
View is a film set, a concert, or an awards show...

I.e. there's an awards show segment. Naked actress gets sent off to Denice who does makeup, fixes dress, tells her what to say. Leaves
Leaves Denice goes to show, then before red carpet attaches to her looks. At award show segment attaches to her speech, etc. Something can walk up to her and
throw paint on her dress. View has now added a property to the this scope object! I.e. Both view and controller can add shit to scope

 */
