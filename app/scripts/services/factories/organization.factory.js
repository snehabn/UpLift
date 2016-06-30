(function() {
    'use strict';

    angular
        .module('upliftApp')
        .factory("organization", organization);

    organization.$inject = ['$resource'];

    function organization($resource) {
        var organization = $resource("https://blooming-cove-33951.herokuapp.com/organizations/:id", { id: "@id" }, {
            'update': { method: 'PUT' }
        });

        return organization;
    }
})();
