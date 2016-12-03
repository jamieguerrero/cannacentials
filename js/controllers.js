var myApp = angular.module('cannacentials', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'attributes/effects.html',
        controller: 'effectsController'
    })

    .when('/effects', {
        templateUrl: 'attributes/effects.html',
        controller: 'effectsController'
    })

    .when('/medical', {
        templateUrl: 'attributes/medical.html',
        controller: 'medicalController'
    })
    .when('/negatives', {
        templateUrl: 'attributes/negatives.html',
        controller: 'negativesController'
    });


});

myApp.controller('effectsController', ['$scope', function($scope) {

    $scope.effectsa = 'relaxed';
    $scope.effectsb = 'sleepy';
    $scope.effectsc = 'happy';
    $scope.effectsd = 'euphoric';
    $scope.effectse = 'uplifted';

    /* ===== can't call in main.js. change in main.js too =====*/
    $scope.effectsLoad = function(){
        /* Check the location of each desired element */
      $('.animate-bars').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){

              $('.effectsa').css('width', '100%');
              $('.effectsb').css('width', '60%');
              $('.effectsc').css('width', '60%');
              $('.effectsd').css('width', '55%');
              $('.effectse').css('width', '40%');

          }
      });
    };
}]);

myApp.controller('medicalController', ['$scope', function($scope) {
    $scope.medicala = 'stress';
    $scope.medicalb = 'pain';
    $scope.medicalc = 'insomnia';
    $scope.medicald = 'depression';
    $scope.medicale = 'headaches';

    $scope.medicalLoad = function(){
        /* Check the location of each desired element */
      $('.animate-bars').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){

              $('.medicala').css('width', '100%');
              $('.medicalb').css('width', '73%');
              $('.medicalc').css('width', '63%');
              $('.medicald').css('width', '53%');
              $('.medicale').css('width', '44%');

          }
      });
    };
}]);

myApp.controller('negativesController', ['$scope', function($scope) {

    $scope.negativesa = 'dry mouth';
    $scope.negativesb = 'dry eyes';
    $scope.negativesc = 'dizzy';
    $scope.negativesd = 'paranoid';
    $scope.negativese = 'headache';

    $scope.negativesLoad = function(){
        /* Check the location of each desired element */
      $('.animate-bars').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){

              $('.negativesa').css('width', '100%');
              $('.negativesb').css('width', '66%');
              $('.negativesc').css('width', '26%');
              $('.negativesd').css('width', '22%');
              $('.negativese').css('width', '17%');

          }
      });
    };
}]);