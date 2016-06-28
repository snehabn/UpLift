'use strict';

angular.module('upliftApp')
	.service('EventsService', function($http){

	var events = {};
	events.getAll = function() {
		return $http.get('https://blooming-cove-33951.herokuapp.com/events').success(function(data){
			console.log(data);
			angular.copy(data, events);
		});
	};

	return events;

});
