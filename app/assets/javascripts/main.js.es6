(function () {
  'use strict';

  angular
    .module('PrivateWiki', [])
    .controller('ApplicationCtrl', ApplicationCtrl);

  ApplicationCtrl.$inject = ['$scope', '$rootScope', '$location'];
  function ApplicationCtrl($scope, $rootScope, $location) {
    $scope._ = _;
  }
})();
