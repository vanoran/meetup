
angular.module('mycalendar.controller', [])

.controller('MyCalendarCtrl', function($scope) {
	/* stateValues:
		 0 => busy,
	 * 	 1 => free,
	 ...
	 morning, noon, afternoon, night
	*/

	var days = [{
		title: 'SUNDAY',
		states: [0,0,0,1]
	},{
		title: 'MONDAY',
		states: [0,0,0,1]
	},{
		title: 'TUESDAY',
		states: [0,0,0,1]
	},{
		title: 'WEDNESDAY',
		states: [0,0,0,1]
	},{
		title: 'THURSDAY',
		states: [0,0,0,1]
	},{
		title: 'FRIDAY',
		states: [0,0,0,1]
	},{
		title: 'SATURDAY',
		states: [0,0,0,1]
	}];
	var stateNames = ['MORNING', 'NOON', 'AFTERNOON', 'NIGHT'];

	$scope.userDays = days;
	$scope.stateNames = stateNames;

	$scope.updateDay = function(day, indexState) {
		var stateValues = 2;/* */
		day.states[indexState] = (day.states[indexState]+1) % 2;
		/* Make a call to the server to update the info */
	}

});