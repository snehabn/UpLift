'use strict';

angular.module('upliftApp')
  .controller('EventsCtrl',['$scope', '$route', 'EventsService', 

    function ($scope, $route,EventsService) {

    // var controller = this;
    // $http({
    //   method: 'GET',
    //   url: 'https://blooming-cove-33951.herokuapp.com/organizations'
    // })
    // .then(function successCallback(response) {
    //   $scope.organization = response.data[0];
    //   // $scope.orgs_arr = response.organizations;
    //   // $scope.first_org = $scope.orgs_arr[0];
    //   // $scope.events = response.events;
    //   // $scope.eventsForOrg = $scope.getEventsByOrg($scope.events, 1);
    // }, function errorCallback(response) {

    // });
    EventsService.getAll().then(function(data){
      $scope.events = data.data;
    });

    // EventsService.get(id).then(function(data){
    //   $scope.event = data.data;
    // });
}]);