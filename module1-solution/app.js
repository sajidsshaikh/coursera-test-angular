(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.calculateMenu = function () {
    $scope.menu = "";
    var menuVal = $scope.menu;
    if (menuVal == "") {
      $scope.message = "Please enter data first";
    } else {
      var menuLength = calculateMenuLength(menuVal);
      if (menuLength <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }

  };
}

function calculateMenuLength(menuVal) {
  var array = menuVal.split(",");
  console.log("Array Size :" + array.length);
  return array.length;
}

})();
