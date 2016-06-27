'use strict';

angular.module('upliftApp')
	.service('OrganizationsService', function($http){

	var orgs = {};

	orgs.getAll = function() {
		return $http.get('https://blooming-cove-33951.herokuapp.com/organizations').success(function(data){
			angular.copy(data, orgs);
		});
	};

	return orgs;

});
