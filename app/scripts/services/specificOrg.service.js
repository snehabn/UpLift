'use strict';

angular.module('upliftApp')
.service('specificOrgService', function($http){
  
  var specificOrg = {};
  this.get = function(id) {
    return $http.get('https://blooming-cove-33951.herokuapp.com/events/'+id+'/').success(function(data){
      console.log(data);
      angular.copy(data, specificOrg);
    });
  };
  // return specificOrg;

});