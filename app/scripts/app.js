'use strict';

/**
 * @ngdoc overview
 * @name testYeomanApp
 * @description
 * # testYeomanApp
 *
 * Main module of the application.
 */
angular
  .module('upliftApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/organizations', {
        templateUrl: 'views/organizations.html',
        controller: 'OrganizationsCtrl',
        controllerAs: 'organization'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

