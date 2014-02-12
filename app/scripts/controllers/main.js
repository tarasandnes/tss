'use strict';

angular.module('tssApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if (backendType) {
            //alert("Backend is " + backendType);

        }

        switch (backendType) {
            case "static" :
                //alert("Yes switch says we are indeed static");
                $scope.books = [
                    {author: "Kendall", title: "Kendall is a superhero", location: "Los Angeles", date: "09/10/2013"},
                    {author: "Elizabeth", title: "Liz is a sexy", location: "Los Mantra", date: "09/10/2012"},
                    {author: "Oliver", title: "Oli was born genius", location: "San Fransico", date: "09/10/2011"},
                    {author: "Kendall", title: "Kendall is a superhero", location: "Portlan", date: "09/09/2013"}
                ];
        }


        //'Oliver goes potty', 'Elizabeth goes potty', 'Johann goes potty', 'Kenny goes poopy'];

        $scope.getBooks = function () {
            return $scope.books.length;
        };


        $scope.addToDo = function () {
            $scope.books.push($scope.bookToAdd);
            $scope.bookToAdd = '';
            //alert ("Just clicked it" + $scope.todotoAdd);
        };

        $scope.removeToDo = function (index) {
            alert($scope.books.splice(index, 1));
        };

    });
