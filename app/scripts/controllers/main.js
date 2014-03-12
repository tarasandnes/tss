'use strict';

myTssApp.controller('MainCtrl', function ($scope,getBooksFactory) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        if (backendType) {
            //alert("Backend is " + backendType);

        }

    var init = function () { // dont have to do init() just nice way to orhanise setting up stuff by using this private function
        switch (backendType) {
            case "static" :
                //alert("Yes switch says we are indeed static");
                $scope.books = getBooksFactory.getBooks();
        }

    }

    init();




        //'Oliver goes potty', 'Elizabeth goes potty', 'Johann goes potty', 'Kenny goes poopy'];

        $scope.getNrBooks = function () {
            return $scope.books.length;
        };


        $scope.addToDo = function () {
            var bookToAdd = {};
            bookToAdd.author = $scope.newBook.author;
            bookToAdd.title = $scope.newBook.title;
            bookToAdd.location = $scope.newBook.location;
            bookToAdd.date = $scope.newBook.date;


            $scope.books.push(bookToAdd);

            $scope.newBook.author = "";
            $scope.newBook.title = "";
            $scope.newBook.location = "";
            $scope.newBook.date = "";
            //alert ("Just clicked it" + $scope.todotoAdd);
        };

        $scope.removeToDo = function (index) {
            alert($scope.books.splice(index, 1));
        };

    });
