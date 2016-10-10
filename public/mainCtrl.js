angular.module("todoApp")
.controller("mainCtrl", function($scope,mainServ){

$scope.list = mainServ.todoList;


});
