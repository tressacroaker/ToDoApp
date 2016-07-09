angular.module("toDoApp")
.service("mainServ", function($http) {
  this.getTodos = function(){
    return $http({
      method: "GET",
      url: "/todo"
    })
    .then(function(response){
      console.log(response);
      return response.data;
    });
  };

  this.newTodo = function(todo){
    return $http({
      method: "POST",
      url: "/todo",
      data: todo
    })
    .then(function(response){
      return response;
    });
  };

  this.changeTodo = function(todo){
    return $http({
      method: "PUT",
      url: "/todo/" + todo._id,
      data: todo
    })
    .then(function(response){
      return response;
    });
  };

  this.deleteTodo = function(todo){
    return $http({
      method: "DELETE",
      url: "/todo/" + todo._id
    })
    .then(function(response){
      return response;
    });
  };

});
