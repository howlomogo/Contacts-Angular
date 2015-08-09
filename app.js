var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope, $http) {

  $scope.orderList = 'name';

  $scope.jsondata =  $http.get("contacts.json")
    .success(function(response) {
      $scope.contacts = response.contactsinfo;
    });

  $scope.contactdetails = function(item) {
    $scope.currentDetails = item;
  };
});