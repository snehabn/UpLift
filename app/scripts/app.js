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
        controllerAs: 'organizations'
      })
      .when('/organizations/:id', {
        templateUrl: 'views/specificOrg.html',
        controller: 'specificOrgCtrl',
        controllerAs: 'org'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/events/:id', {
        templateUrl: 'views/specificEvent.html',
        controller: 'specificEventCtrl',
        controllerAs: 'event'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'Register Controller',
        controllerAs: 'vm'
      })


      .otherwise({
        redirectTo: '/'
      });
  });

