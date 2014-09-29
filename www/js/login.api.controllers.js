angular.module('login.api.controllers', [])
.factory('userService', function($rootScope){
	var service = {

		saveState: function(user){
			localStorage.setItem('user', JSON.stringify(user));
		},

		getState: function(){
			return JSON.parse(localStorage.getItem('user'));
		}
	};

	return service;
})

.controller('LoginApiCtrl', function($scope, $ionicPopup, $http, userService){
	$scope.widthMenu = window.innerWidth;
	//$scope.user = userService.getState();
	
});