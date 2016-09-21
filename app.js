(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('MySecondController', function ($scope){
  $scope.lastName = 'Shaikh';
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
})
.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
