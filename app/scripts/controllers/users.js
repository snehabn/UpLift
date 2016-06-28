'use strict';

angular.module('upliftApp')
  .controller('UsersCtrl',['$scope', 'UsersService', 

    function ($scope, UsersService) {

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
      };
    });

}]);
