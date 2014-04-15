'use strict';

angular.module('conditionalModalApp')
  .controller('MainCtrl', function ($scope, People) {
    $scope.people = People;
  });
