'use strict';

angular.module('upliftApp')
  .service('RegisterService', function($http){

  var events = {};
  this.getAll = function() {
    return $http.get('https://blooming-cove-33951.herokuapp.com/events').success(function(data){
      angular.copy(data, events);
    });
  };

  // return events;

});
