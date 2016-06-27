'use strict';

angular.module('upliftApp')
	.service('OrganizationsService', function($http){

	var orgs = {};

	// orgs = []

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

	// o.create = function(content) {
	// 	return $http.post('http://localhost:3000/api/rooms', content)
	// 	.success(function(data){
	// 		o.rooms.push(data.room);
	// 	})
	// 	.error(function(error){
	// 		console.log(error);
	// 	});
	// };

	// o.update = function(id, content) {
	// 	return $http.put('http://localhost:3000/api/rooms/'+id, content).success(function(data){
	// 		console.log(data)
	// 	})
	// }

	// o.delete = function(id){
	// 	return $http.delete('http://localhost:3000/api/rooms/'+id).success(function(){
	// 		$location.path('/rooms').replace()
	// 	})
	// }

	// o.startGame = function(id, content){
	// 	return $http.post('http://localhost:3000/api/rooms/'+id+'/game_begin', content)
	// }

	// o.voteOut = function(id, content) {
	// 	return $http.post('http://localhost:3000/api/rooms/'+id+'/vote_out', content)
	// }

	return orgs;

});
