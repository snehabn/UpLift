(function() {
    'use strict';

    angular
        .module('upliftApp')
        .controller('OrganizationShowCtrl', OrganizationShowCtrl);

    OrganizationShowCtrl.$inject = ['$routeParams', 'organization']

    function OrganizationShowCtrl($routeParams, organization) {
        var vm = this;

        organization.get({ id: $routeParams.id }, function(data) {
            console.log(data)
            var organization = {
                id: data.organization.id,
                name: data.organization.name,
                email: data.organization.email,
                zip: data.organization.zip,
                mission: data.organization.mission_statement,
                phone: data.organization.phone_number,
                web: data.organization.website_url,
                image: data.organization.image_url
            };
            angular.extend(vm, organization)
        });

        vm.updateOrganization = function () {
            organization.update({id: vm.id}, function(organization) {

            });
        }
    }
})();
