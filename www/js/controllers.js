angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state) {

	navigator.geolocation.getCurrentPosition(function(position){
		/*alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
      */
	});

  $( ".draggable" ).draggable({ scrollSpeed: 600 });
  $( ".droppable" ).droppable({
    drop: function() {
      $state.go('tab.now');
    }
  });
  $( ".droppable-settings" ).droppable({
    drop: function() {
      $state.go('tab.settings');
    }
  });
})

.controller('HomeCtrl', function($scope){
  $scope.test = 'test';
})

.controller('SettingsCtrl', function($scope){
  $scope.test = 'test';
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});

