'use strict';

angular.module('upliftApp')
.service('specificEventService', function($http){
	
	var specificEvent = [];
	this.get = function(id) {
		return $http.get('https://blooming-cove-33951.herokuapp.com/events/'+id+'/').success(function(data){
			angular.copy(data, specificEvent);
		});
	};
	// return specificEvent;

});
