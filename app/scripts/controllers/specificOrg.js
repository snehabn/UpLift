'use strict';

angular.module('upliftApp')
  .controller('specificOrgCtrl',['$scope', '$route', '$routeParams', 'specificOrgService',

    function ($scope, $route, $routeParams, specificOrgService) {


    specificOrgService.get($routeParams.id).then(function(data){
      var singleOrg = data.data;
      console.log(singleOrg);
      $scope.oneOrg = {
        Name: singleOrg.organization.name,
        Email: singleOrg.organization.email,
        Zip: singleOrg.organization.zip,
        Mission: singleOrg.organization.mission_statement,
        Phone: singleOrg.organization.phone_number,
        Web: singleOrg.organization.website_url,
        Image: singleOrg.organization.image_url
      };
      // $scope.oneOrg = data.data;
    });
}]);