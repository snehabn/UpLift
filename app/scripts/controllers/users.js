'use strict';

angular.module('upliftApp')
  .controller('UsersCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: 'https://blooming-cove-33951.herokuapp.com/users'
    })
    .then(function successCallback(response1) {
      console.log(response1);
      $scope.user = response1.data;
      // $scope.orgs_arr = response.organizations;
      // $scope.first_org = $scope.orgs_arr[0];
      // $scope.events = response.events;
      // $scope.eventsForOrg = $scope.getEventsByOrg($scope.events, 1);
    }, function errorCallback(response) {

    });
});