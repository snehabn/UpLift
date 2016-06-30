(function() {
    'use strict';

    angular
        .module('upliftApp')
        .controller('OrganizationCreateCtrl', OrganizationCreateCtrl);

    OrganizationCreateCtrl.$inject = ['$resource', 'organization']

    function OrganizationCreateCtrl($resource, organization) {
        var vm = this;

        var organization = new organization();  //create new organization instance. Properties will be set via ng-model on UI

        vm.addOrganization = function() { //create a new organization. Issues a POST to /api/organizations
          organization.$save(function(organization) {
            // Do something here if you want, like redirect
            console.log(organization)
          });
        };
    }
})();
