(function() {
    'use strict';

    angular
        .module('upliftApp')
        .controller('OrganizationIndexCtrl', OrganizationIndexCtrl);

    OrganizationIndexCtrl.$inject = ['$scope', 'organization']

    function OrganizationIndexCtrl($scope, organization) {
        var vm = this;

        organization.query(function(data) {
            angular.extend(vm, { organizations: data });
        });

        vm.deleteOrganization = function(organizationId) {
            organization.delete({id: organizationId}, function () {
                console.log('Deleted from server');
            });
        };
    }
})();
