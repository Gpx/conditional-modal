'use strict';

angular.module('conditionalModalApp')
  .controller('PersonCtrl', function ($scope, $routeParams, People) {
    $scope.person = $scope.person || People[$routeParams.id];
  });
