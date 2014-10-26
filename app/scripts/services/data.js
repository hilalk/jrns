'use strict';

angular.module('webApp.data', [])
  .factory('jrnsAPIservice', function($http) {

    var jrns = {};
   

    jrns.getPosts = function(page) {
        
      return $http({
        method: 'JSONP', 
        url: 'http://jrns.co/api/get_posts/?post_type=journos_tweet&page='+page,
        params : {callback : 'JSON_CALLBACK'}
      });
    };

    // ergastAPI.getDriverDetails = function(id) {
    //   return $http({
    //     method: 'JSONP', 
    //     url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
    //   });
    // }

    // ergastAPI.getDriverRaces = function(id) {
    //   return $http({
    //     method: 'JSONP', 
    //     url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
    //   });
    // }

    return jrns;
  });