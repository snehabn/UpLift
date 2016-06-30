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
    .config(function($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/organizations', {
                templateUrl: 'views/organizations/organizations.html',
                controller: 'OrganizationIndexCtrl'
            })
            .when('/organizations/new', {
                templateUrl: 'views/organizations/new.html',
                controller: 'OrganizationCreateCtrl'
            })
            .when('/organizations/:id/edit', {
                templateUrl: 'views/organizations/edit.html',
                controller: 'OrganizationShowCtrl'
            })
            .when('/organizations/:id', {
                templateUrl: 'views/organizations/show.html',
                controller: 'OrganizationShowCtrl'
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
            .otherwise({
                redirectTo: '/'
            });
    });
