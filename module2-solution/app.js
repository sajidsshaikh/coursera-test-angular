(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.controller('ToBuyShoppingController', ToBuyShoppingController);
AlreadyBoughtShoppingController.$inject = ['$scope'];
ToBuyShoppingController.$inject = ['$scope'];
function ToBuyShoppingController($scope) {
}

function AlreadyBoughtShoppingController($scope) {
}

})();
