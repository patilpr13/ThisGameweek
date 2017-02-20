'use strict';

/**
 * @ngdoc directive
 * @name thisgameweekApp.directive:player
 * @description
 * # player
 */
angular.module('thisgameweekApp')
  .directive('player', function () {
    return {
      scope: {
        playerInfo: '=info'
      },
      templateUrl: 'views/player.html',
      restrict: 'E'
    };
  });
