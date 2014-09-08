
angular.module('mycalendar.controller', [])

.controller('MyCalendarCtrl', function($scope) {
	/* stateValues:
		 0 => busy,
	 * 	 1 => free,
	 ...
	 morning, noon, afternoon, night
	*/
	var days = [{
		title: 'Domingo',
		states: [0,0,0,1]
	},{
		title: 'Lunes',
		states: [0,0,0,1]
	},{
		title: 'Martes',
		states: [0,0,0,1]
	},{
		title: 'Miercoles',
		states: [0,0,0,1]
	},{
		title: 'Jueves',
		states: [0,0,0,1]
	},{
		title: 'Viernes',
		states: [0,0,0,1]
	},{
		title: 'Sabado',
		states: [0,0,0,1]
	}];
	var stateNames = ['Mañana', 'Mediodía', 'Tarde', 'Noche'];

	$scope.userDays = days;
	$scope.stateNames = stateNames;

	$scope.updateDay = function(day, indexState) {
		var stateValues = 2;/* */
		day.states[indexState] = (day.states[indexState]+1) % 2;
		/* Make a call to the server to update the info */
	}

});