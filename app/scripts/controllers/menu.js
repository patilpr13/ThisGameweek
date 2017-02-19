'use strict';

/**
 * @ngdoc function
 * @name thisgameweekApp.controller:MenuCtrl
 * @description navigation controller
 * # MenuCtrl
 * Menu controller of thisgameweekApp
 */
angular.module('thisgameweekApp').controller('MenuCtrl',
  function ($scope, $state) {
    $scope.currentNavItem = 'myteam';
    $scope.currState = $state;
    $scope.$watch('currState.current.name', function (newValue, oldValue) {
      $scope.currentNavItem = newValue;
    });
    $state.go($scope.currentNavItem);
  });
