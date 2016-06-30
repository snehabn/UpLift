'use strict';

angular.module('upliftApp')
  .controller('specificEventCtrl',['$scope', '$route', '$routeParams', 'specificEventService',

    function ($scope, $route, $routeParams, specificEventService) {

        specificEventService.get($routeParams.id).then(function(data){
          $scope.event = data.data;
        });

    }

]);