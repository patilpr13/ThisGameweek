'use strict';

/**
 * @ngdoc overview
 * @name thisgameweekApp
 * @description The main module.
 * # thisgameweekApp
 *
 * Main module of the application.
 */
angular.module('thisgameweekApp', ['ngAnimate','ngAria','ngMaterial','ui.router'])
       .config(
       function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider){
         // enable HTML5 strictMode
        // $locationProvider.html5Mode(true);
        // $locationProvider.hashPrefix('!');
        // for handling trailing slashes
	      $urlMatcherFactoryProvider.strictMode(false);
        // for any unmatched url
        $urlRouterProvider.otherwise("/home");

        $stateProvider.state('home', {
          name:'home',
          url: '/home',
          templateUrl:'views/home.html'
        });

        $stateProvider.state('myteam', {
          name:'myteam',
          url: '/myteam',
          templateUrl:'views/myteam.html'
        });

        $stateProvider.state('highlights', {
          name:'highlights',
          url: '/highlights',
          templateUrl:'views/highlights.html'
        });

        $stateProvider.state('leagues', {
          name:'leagues',
          url: '/leagues',
          templateUrl:'views/leagues.html'
        });  

        $stateProvider.state('challenges', {
          name:'challenges',
          url: '/challenges',
          templateUrl:'views/challenges.html'
        });      

        $stateProvider.state('fixtures', {
          name:'fixtures',
          url: '/fixtures',
          templateUrl:'views/fixtures.html'
        });                  

       });
