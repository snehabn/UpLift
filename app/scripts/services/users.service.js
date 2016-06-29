'use strict';

angular.module('upliftApp')
.service('UsersService', function($http){

	var users = {};

	this.getAll = function() {
		return $http.get('https://blooming-cove-33951.herokuapp.com/users').success(function(data){
			angular.copy(data, users);
		});
	};

	users.getEvents = function(){
		return $http.get('https://blooming-cove-33951.herokuapp.com/events_users').success(function(data1){
			angular.copy(data1, users);
		});
	};


	// o.get = function(id) {
	// 	return $http.get('http://localhost:3000/api/rooms/'+id).then(function(res){
	// 		console.log(res.data)
	// 		return res.data;
	// 	});
	// };

	// return users;
});
