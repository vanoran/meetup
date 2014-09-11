angular.module('now.controller', [])
.controller('NowCtrl', function($scope) {
	$scope.events = [{
  		peopleAccepted: 3,
  		remainingTime: 25,
  		eventOwner: "Michael",
  		eventIcon: "ion-ios7-wineglass"
 		},{
  		peopleAccepted: 6,
  		remainingTime: 12,
  		eventOwner: "Kim",
  		eventIcon: "ion-ios7-football-outline"
 		},{
  		peopleAccepted: 1,
  		remainingTime: 2,
  		eventOwner: "Lu",
  		eventIcon: "ion-pizza"
  		},{
  		peopleAccepted: 7,
  		remainingTime: 29,
  		eventOwner: "Paul",
  		eventIcon: "ion-model-s"
  		},{
  		peopleAccepted: 25,
  		remainingTime: 30,
  		eventOwner: "Steven",
  		eventIcon: "ion-bonfire"
 		}];

	$scope.currentActive = -1;

 	$scope.setActive = function(index){
  		if(index == $scope.currentActive){
   			$scope.currentActive = -1;
  		}else{
   			$scope.currentActive = index;
  		}  
 	};
})