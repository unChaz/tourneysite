(function () {
  'use strict';

  angular
    .module('TourneySite', [])
    .controller('ApplicationCtrl', ApplicationCtrl);

  ApplicationCtrl.$inject = ['$scope', '$rootScope', '$location'];
  function ApplicationCtrl($scope, $rootScope, $location) {
    $scope._ = _;
  }
})();
