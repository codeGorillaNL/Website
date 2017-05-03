   'use strict';

   /**
   * @ngdoc function
   * @name codeGorillaApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the codeGorillaApp
   */

   angular.module('codeGorillaApp')
          .controller('RegistrationCtrl', function ($scope) {
            this.awesomeThings = [
              'HTML5 Boilerplate',
              'AngularJS',
              'Karma'
            ];
          $scope.submit = function(user) {
            console.log(user);
          }



    // $http({
    // method: 'POST',
    // url: baseurl + '/api/users',
    // Data: $httpParamSerialLizerJQLike( user )
    // headers:
    // 'content-Type' 'application/x-www-form-urlencoded'
    // }) }; 
  });
