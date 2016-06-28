'use strict';

angular.module('upliftApp')
  .controller('specificOrgCtrl',['$scope', '$route', '$routeParams', 'specificOrgService',

    function ($scope, $route, $routeParams, specificOrgService) {


    specificOrgService.get($routeParams.id).then(function(data){
      var singleOrg = data.data;
      console.log(singleOrg);
      $scope.oneOrg = {
        name: singleOrg.organization.name,
        email: singleOrg.organization.email,
        zip: singleOrg.organization.zip,
        mission: singleOrg.organization.mission_statement,
        phone: singleOrg.organization.phone_number,
        web: singleOrg.organization.website_url,
        image: singleOrg.organization.image_url
      };
      // $scope.oneOrg = data.data;
    });
}]);