'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('MainCtrl', function ($scope ,jrnsAPIservice,$sce,$log) {  //

  	$scope.posts = [];
  	$scope.pagenum = 0;
  	$scope.busy = false;

    // jrnsAPIservice.getPosts($scope.pagenum).success(function (response) {

    // 	$scope.pagenum++;
    //     //Dig into the responde to get the relevant data
    //     $log.debug('load page ' + $scope.pagenum);
    //     $scope.posts = response.posts;
    //     //$log.debug(response.posts.length);
       
    // });

    $scope.getMorePosts = function() {

    	if($scope.busy) return;
    	$scope.busy = true;

    	jrnsAPIservice.getPosts($scope.pagenum).success(function (response) {

    	$scope.pagenum++;
        //Dig into the responde to get the relevant data
        $log.debug('load page ' + $scope.pagenum);
        $//scope.posts = response.posts;
         var items = response.posts;
	    for (var i = 0; i < items.length; i++) {
	        $scope.posts.push(items[i]);
	     }
        $scope.busy = false;
        //$log.debug(response.posts.length);
    	});
    };



    $scope.SkipValidation = function(value) {
  		return $sce.trustAsHtml(value);
	};
  });


  // angular.module('superbrightApp')
  // .controller('MainCtrl', function ($scope) {
  //   $scope.awesomeThings = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  // });



