'use strict';

/**
 * @ngdoc function
 * @name thisgameweekApp.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the thisgameweekApp
 */
angular.module('thisgameweekApp')
  .controller('TeamCtrl', ['teamProvider','$scope', function (teamProvider, $scope) {
      teamProvider.getTeam().then(function(data){
            $scope.goalkeepers = data[0].goalkeepers;
            $scope.defenders = data[0].defenders;
            $scope.midfielders = data[0].midfielders;
            $scope.attackers = data[0].attackers;
      });
  }]);
