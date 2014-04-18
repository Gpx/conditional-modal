'use strict';

angular.module('conditionalModalApp')
  .controller('MainCtrl', function ($scope, $timeout, ngDialog, People) {
    $scope.people = People;

    $scope.$on('$locationChangeStart', function (evt, next, current) {
      var match;
      if (match = next.match(/\/people\/(\d)+$/i)) {
        evt.preventDefault();
        var dialogScope = $scope.$new();
        dialogScope.person = $scope.people[match[1]];
        ngDialog.open({
          template: 'views/person.html',
          controller: 'PersonCtrl',
          scope: dialogScope
        });

        dialogScope.$on('ngDialog.closed', function (e, $dialog) {
          window.history.pushState('', '', '/#/');
        });
        setTimeout(function() {
          window.history.pushState('', '', '/#/people/' + match[1] + '?skip');
        }, 5000);
      }
    });
  });
