'use strict';

angular.module('upliftApp')
  .controller('UsersCtrl',['$scope', 'UsersService', 

    function ($scope, UsersService) {

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
    UsersService.getAll().then(function(data){
      var tempUsers = data.data;
      var tempUser1 = tempUsers[0]; //display 1 user for now

      $scope.user = {
        id: tempUser1.id,
        firstName: tempUser1.first_name,
        lastName: tempUser1.last_name,
        email: tempUser1.email,
        zip: tempUser1.zip,
        image: tempUser1.image_url
      }
    });

    // Trying to get user's events
    // UsersService.getEvents().then(function(data1){
    //   // console.log(data1.data);
    //   var allEvents = data1.data;
    //   var tempUserEvents = [];
    //   console.log(allEvents[0].id);

    //   for (var i = 0; i < allEvents.length; i++){
    //     if (allEvents[i].user_id == 1){
    //       tempUserEvents.push(allEvents[i]);
    //     }
    //   }
    //   // console.log(tempUserEvents);
    //   $scope.eventsUsers = tempUserEvents.data;
    //   console.log(eventsUsers);
    // });
}]);
