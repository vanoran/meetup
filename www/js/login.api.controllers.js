angular.module('login.api.controllers', [])
.factory('User', function() {
	return {
		data:{
			google: []
		}
	};
})

.controller('LoginApiCtrl', function($scope, $ionicPopup, $http, User){
	$scope.widthMenu = window.innerWidth;
	$scope.user = User.data;
	//hardcoded
	$scope.user.google = [
  		'Pepe',
  		'Apellido',
  		'pepe@gmail.com'
  	];
});