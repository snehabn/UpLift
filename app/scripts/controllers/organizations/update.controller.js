(function() {
    'use strict';

    angular
        .module('upliftApp')
        .controller('OrganizationUpdateCtrl', OrganizationUpdateCtrl);

    OrganizationUpdateCtrl.$inject = ['$routeParams', 'organization']

    function OrganizationUpdateCtrl($routeParams, organization) {
        var vm = this;

        organization.get({ id: $routeParams.id }, function(data) {
            var organization = {
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
    }
})();
