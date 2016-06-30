'use strict';

angular.module('upliftApp')
	.service('OrganizationsService', function($http){

	var orgs = [];

	this.getAll = function() {
		return $http.get('https://blooming-cove-33951.herokuapp.com/organizations').success(function(data){
			angular.copy(data, orgs);
		});
	};
	// console.log('************************')
	// console.log(data)
	// return orgs;

});
