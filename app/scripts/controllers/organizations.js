angular.module('upliftApp')
  .controller('OrganizationsCtrl', function ($scope, $http) {

    // var controller = this;
    $http({
      method: 'GET',
      url: 'https://blooming-cove-33951.herokuapp.com/organizations'
    })
    .then(function successCallback(response) {
      $scope.organization = response.data[0];
      // $scope.orgs_arr = response.organizations;
      // $scope.first_org = $scope.orgs_arr[0];
      // $scope.events = response.events;
      // $scope.eventsForOrg = $scope.getEventsByOrg($scope.events, 1);
    }, function errorCallback(response) {

    });
});