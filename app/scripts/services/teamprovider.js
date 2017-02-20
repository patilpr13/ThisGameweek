'use strict';

/**
 * @ngdoc service
 * @name thisgameweekApp.teamProvider
 * @description
 * # teamProvider
 * Service in the thisgameweekApp.
 */
angular.module('thisgameweekApp')
  .service('teamProvider', function () {
    this.getTeam = function(){
      return $.get('data/team.json');
    };
  });
