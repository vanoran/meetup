angular.module('login.api.controllers', [])
.factory('userService', function($rootScope){
	var service = {
		model: {
			access_token: '',
			refresh_token:'',
			data: {
				name: '',
				email: '',
				imageSrc: ''
			}
		},

		saveState: function(){
			sessionStorage.setItem('user', angular.fromJSON(service.model));
		},

		getState: function(){
			sessionStorage.getItem('user');
		}
	};

	return service;
})

.controller('LoginApiCtrl', function($scope, $ionicPopup, $http, userService){
	$scope.widthMenu = window.innerWidth;
	$scope.user = userService.getState();
	
});