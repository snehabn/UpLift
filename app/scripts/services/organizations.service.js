'use strict';

angular.module('upliftApp')
	.service('OrganizationsService', function($http){

	var orgs = {};

	orgs.getAll = function() {
		return $http.get('https://blooming-cove-33951.herokuapp.com/organizations').success(function(data){
			angular.copy(data, orgs);
		});
	};
	// o.get = function(id) {
	// 	return $http.get('http://localhost:3000/api/rooms/'+id).then(function(res){
	// 		console.log(res.data)
	// 		return res.data;
	// 	});
	// };

	return orgs;

});
