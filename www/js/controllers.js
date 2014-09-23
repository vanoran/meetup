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
})

.directive('myCanvasDnd',  function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/myCanvasDnD.html',
    link: function(scope, elem, attrs){
      var $scope = scope;
      var element;
      var canvas = document.getElementById('canvas');
      /* variables to check drop */
      var radius = 35;
      var hipTriangle = 200 + radius*3, //
        widthCanvas = window.innerWidth,
        heightCanvas = window.innerHeight,
        ordOrig = hipTriangle / Math.sqrt(2);


      scope.myWidth = widthCanvas;
      scope.myHeight = heightCanvas;
      //VER ESTE ERROR
      $scope.$apply();
     
    
      $scope.preparedClass = '';


      var Point = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
      }
      var Circle = function (point, radius) {
        this.point = point;
        this.radius = radius;
        this.isInside = function (pt) {
            return Math.pow(pt.x - point.x, 2) + Math.pow(pt.y - point.y, 2) < Math.pow(radius, 2); 
        };
        this.avatar = new Image();
        this.avatar.onload = function() {
          this.draw();
        };

        this.avatar.draw = function(){
          var avatarRadius = radius;        
          var context = element.getContext('2d');
          var centerX = point.x,
            centerY = point.y;
            context.clearRect(0, 0, canvas.width, canvas.height);
          /* Clipping the image avatar */
          context.save();
            context.beginPath();
            context.arc(centerX, centerY , avatarRadius, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();

            context.drawImage(this, centerX - avatarRadius, centerY- avatarRadius, 
            avatarRadius*2, avatarRadius*2);

            context.beginPath();
            context.arc(0, 0, avatarRadius, 0, Math.PI * 2, true);
            context.clip();
            context.closePath();
            context.restore();

            /* creating the border of the avatar*/
            context.beginPath();
            context.strokeStyle = 'white';
            context.arc(centerX, centerY, avatarRadius, 0, Math.PI * 2, true);
            context.lineWidth = 2;
            context.stroke();

        };
        
        this.avatar.src = 'img/avatar.png';
        return this;
      }

      function checkZones(point){
        //top left check
        if( point.y <= -point.x + ordOrig){
          $scope.currentOver = 'tl';
          return true;
        }
        
        //top right check
        if( point.y <= point.x - widthCanvas + ordOrig){
          $scope.currentOver = 'tr';
          return true;
        }
        
        //bottom left check
        if( point.y >= point.x + heightCanvas - ordOrig){
          $scope.currentOver = 'bl';
          return true;
        }
        //bottom right check
        if( point.y >= -point.x + ordOrig/2 + heightCanvas){
          $scope.currentOver = 'br';
          return true;
        }
        $scope.currentOver = '';
        
        return false;
      }

      function startDragging(e) {
        e.preventDefault();
        var p = new Point(mouseX(e), mouseY(e));
        
        if(circle.isInside(p)) {
          $scope.preparedClass = 'prepared';
          $scope.$apply();
          deltaCenter = new Point(p.x - circle.point.x, p.y - circle.point.y);
        }
      }

      function drag(e) {
        
        e.preventDefault();
        console.log('DC: '+deltaCenter);
          if(deltaCenter != null) {
              circle.point.x = (mouseX(e) - deltaCenter.x);
              circle.point.y = (mouseY(e) - deltaCenter.y);   
              circle.avatar.draw();
              checkZones(circle.point);
              $scope.$apply();
          }
      }

      function stopDragging(e) {
          deltaCenter = null;
          $scope.preparedClass = '';
          switch($scope.currentOver){
            case 'tl': window.location.href = '#/app/now';
              break;
            case 'tr':
              break;
            case 'bl':
              break;
            case 'br':
              break;
            default:
          }
          $scope.$apply();
      }

      function mouseX(e) {
          return e.targetTouches[0].clientX - element.offsetLeft;
      }

      function mouseY(e) {
          return e.targetTouches[0].clientY - element.offsetTop;
      }
      
      
      element = document.getElementById('canvas');
      element.addEventListener('touchstart', startDragging, false);
      element.addEventListener('touchmove', drag, false);
      element.addEventListener('touchend', stopDragging, false);
      element.addEventListener('touchcancel', stopDragging, false);

      
      var circle = new Circle(new Point(-radius+scope.myWidth / 2, -radius+scope.myHeight / 2), radius);
      var deltaCenter = null;
      circle.avatar.draw();

    }

  };
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

