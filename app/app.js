var app = angular.module('myfirstangularapp', ['ngRoute']).
    config(function($routeProvider){
      console.log("here");
      $routeProvider.when('/view',
          {
            templateUrl:'app/templates/view.html',
            controller:'MyFirstController'
          });

      $routeProvider.otherwise({redirectTo: '/view'});
    });