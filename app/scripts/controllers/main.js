'use strict';

angular.module('tssApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.books = ['Oliver goes potty', 'Elizabeth goes potty', 'Johann goes potty', 'Kenny goes poopy'];
        $scope.getBooks = function(){
            return $scope.books.length;
        };


        $scope.addToDo = function(){
            $scope.books.push($scope.bookToAdd);
            $scope.bookToAdd ='';
            //alert ("Just clicked it" + $scope.todotoAdd);
        };

        $scope.removeToDo = function(index){
           alert($scope.books.splice(index,1));
        };

    });
