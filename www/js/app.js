// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 
  'translations', 
  'starter.controllers', 
  'starter.services', 
  'mycalendar.controller', 
  'now.controller',
  'login.api.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
/*
.directive('resize', function($window) {
  return {
    link: function(scope) {
      angular.element($window).on('resize', function(e) {
        // Namespacing events with name of directive + event to avoid collisions
        //I should capture this event in the actual directive
        $scope.$broadcast('resize::resize');
        var menu = angular.element('ion-side-menu')[0],
          content = angular.element('ion-pane')[0],
          width = $window.innerWidth,
          height = $window.innerHeight;
        menu.setAttribute('style', 'width:' + width + 'px;');
        //menu.setAttribute('style', 'width:' + width + 'px;');
        //-webkit-transform: translate3d(640px, 0px, 0px);
      });
    }
  }
})*/

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: "LoginApiCtrl"
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.dash', {
      url: '/dash',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })

    .state('app.friends', {
      url: '/friends',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('app.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'menuContent': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('app.now', {
      url: '/now',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-now.html',
          controller: 'NowCtrl'
        }
      }
    })

    .state('app.createevent', {
      url: '/createevent',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-createevent.html',
          controller: 'NowCtrl'
        }
      }
    })

    .state('app.calendar', {
      url: '/mycalendar',
      views: {
        'tab-mycalendar': {
          templateUrl: 'templates/tab-mycalendar.html',
          controller: 'MyCalendarCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/friends');

});

