angular.module("toDoApp")
.controller("mainCtrl", function($scope, mainServ) {

  $scope.todos;
  $scope.focused = false;

  $scope.getTodos = function(){
    mainServ.getTodos()
    .then(function(response){
      $scope.todos = response;
    })
  };
  $scope.getTodos();

  $scope.newTodo = function(todo){
    console.log(todo);
    var postObj = {
      description: todo
    };
    mainServ.newTodo(postObj)
    .then(function(response){
      console.log(response);
      $scope.thingtodo = "";
      $scope.getTodos();
    })
  };

  $scope.changeTodo = function(todo){
    mainServ.changeTodo(todo)
    .then(function(response){
      $scope.getTodos();
    })
  };

  $scope.deleteTodo = function(todo){
    mainServ.deleteTodo(todo)
    .then(function(response){
      $scope.getTodos();
    })
  };

});
