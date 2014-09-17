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
	$scope.data = {
		email: 'jose.aragon@gmail.com',
		password: '123'
	};

	$scope.onClickLogin = function(e){
		e.preventDefault();

	
		var gPopup = $ionicPopup.show({
		    templateUrl: 'templates/loginPopup.html',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancel' },
		      {
		        text: '<b>Save</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		          if (!$scope.data.email || !$scope.data.password) {
		            e.preventDefault();
		          } else {
		            return {
		            	email: $scope.data.email,
		            	password: $scope.data.password
		            };
		          }
		        }
		      },
		    ]
		  });
		gPopup.then(function(res) {
			$http({
		        method: 'POST',
		        dataType: 'json',
		        headers: {
		        	'Content-Type': 'application/x-www-form-urlencoded'
		        },
		        url: 'http://ip.jsontest.com/',//'baseUrl/login',
		        data: $.param(res)
		      })
		      .success(function(data){
		      	//load the data into the profile view
		      	//replace hardcoded values
		      	$scope.user.google = [
		      		'Jose',
		      		'Aragón',
		      		'jose.aragon@gmail.com'
		      	];
		      })  
		      .error(function(error){
		      	// An alert dialog
				$scope.showAlert = function() {
					var alertPopup = $ionicPopup.alert({
						title: 'Error',
						template: 'No se ha podido loguear'
					});
				};
				
		      });
		});
	};
});