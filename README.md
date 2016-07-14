<img src="http://montanacodeschool.com/wp-content/uploads/2015/06/MCS_LOGO_v1.png" width="200" align="right"/>

##To Do App

##Purpose
The purpose of this day project is to continue working on the basic structure of an Angular framework and to introduce some higher level directives.

##Directions
Fork and clone this repository. Complete all of the following steps. When you have finished, push your code into GitHub.

* Review the code that is already built in your folder. I have setup the backend server and database for you. Don't forget to do an npm install and run mongod.

* Inside your public folder, create the files necessary to build your Angular app. Be sure to include index.html, app.js, mainCtrl.js, and mainServ.js. Organize these files in whatever folder structure you are most comfortable with.

* Starting with your index.html, be sure to call in the Angular CDN and all of your JavaScript files in script tags.

* Establish your Angular app by associating the index.html file with your ng-app and ng-controller.

* Setup your app.js using the angular.module method. Be sure to use the same name as you used in your ng-app directive.

* Setup your mainCtrl.js and mainServ.js by associating the app name, controller name, and service name. In your controller, inject in the $scope object and the mainServ service file. In your service, inject in $http.

* Before we start adding functionality, test the controller by plugging in a test value. Make sure that your test value shows up in your view when you run this on live-server or nodemon. If that worked, remove your test code.

* Let's think about what is needed for a To Do app to function properly. You need a way to add a to do item and display that item. You also want a way to delete and change the to do item. Looking at some of the more complex angular directives, try to include a way to sort and filter the list, to show and hide certain elements on click or double click. Stretch a little further by going to the [Angular Docs](https://docs.angularjs.org/api) and see if you can add other functionality.

* With that said, lets start by adding to do items and displaying them. Make sure you set up an input tag to add a to do item, which, on submit, will post a new item to our database. Then, when you have completed that, setup the API request to get all of the to do items and display them in a list.

* Next up is delete and change. Remember, when you do an ng-repeat, we have direct access to the id for each item in the array that is being displayed. This should make doing a delete and a change to each of our items very easy. When invoking a function that calls an API request, you can call in the entire object as an argument. Then when setting up the API request, you can plug the object.id into the url for PUT and DELETE requests, and the entire object can be plugged in as the data for a PUT request.

* If you have all of your CRUD requests running seamlessly, let's move on to some fun new directives.

  * Since you already have a list of items using ng-repeat, let's sort that list. You can sort it by anything you want that is part of the to do item object. For now, we'll just focus on the to do description. In the ng-repeat, we will have to add a pipe and use the keyword orderBy and define how we would like it sorted. If you want to do it alphabetically, you can just type in `+description` in as your criteria. The code will look like this.

  ```
  <div ng-repeat="todo in todos | orderBy: '+description'">
  ```

  * If you want the user to decide whether the list is sorted in ascending or descending order, you can add some buttons and use a variable instead. So if you add a button for Ascending, inside the button tag, you can add an ng-click that says the value of your variable equals `+description`. Alternately, in your Descending button, your ng-click would set the value of your variable to `-description`. The code for your Ascending button should look like this.
  ```
  <button type="button" ng-click="sorter='+description'">Ascending</button>
  ```
  And your ng-repeat should now look like this.
  ```
  <div ng-repeat="todo in todos | orderBy: sorter">
  ```
  So now, when the user clicks on the Ascending button, your list is in ascending alphabetical order, and conversely for your descending button.

  * The next thing we can do is filter our results. Maybe, we have several items in our to do list regarding eating. If we could filter by a keyword like 'eat', we could slim down our list to those things that matter to the user. The first thing we would need to do is once again modify our ng-repeat. This requires us to add another pipe and using the keyword 'filter', we will again associate a variable that we will filter by. So the ng-repeat should be updated to look something like this.
  ```
  <div ng-repeat="todo in todos | orderBy: sorter | filter: filterer">
  ```
  Finally, we should create an input box with type text and an ng-model of the same variable chosen for the ng-repeat, in this case "filterer". Once that is completed, the user can strip down his list by anything that he types into the input box.

  * The last thing that we can do is setup some ng-show's and ng-hide's using an ng-dblclick. So, I don't think it looks very clean to have a bunch of update buttons sitting around and have open input boxes containing our information, so I am going to hide my input boxes and my update buttons until I double click on my to do items. And then, once I update my item, I can set it back to it's original state.

  In order to pull this off, I will first need to create a $scope variable in my controller. Let's call it  $scope.focused and we will set it's value to false. The next thing we will do is, in the update button and the input box needed to change our to do item, we will include ng-show and set it equal to 'focused'. Also in the tag containing our to do item, we will include ng-hide and set it equal to 'focused' also. That code should look something like this.
  ```
  <form ng-submit="changeTodo(todo)">
    <input ng-show="focused" type="text" ng-model="todo.description">
  </form>
  <span ng-hide="focused">{{todo.description}}</span>
  <button type="button" ng-click="changeTodo(todo)" ng-show="focused">Update</button>
  ```
  Now, we need an event listener that will tell us that we want to make a change. In this case, I am going to use ng-dblclick. So, in the tag containing the to do item, we will add and set the value of ng-dblclick to be a statement saying that the value of focused now equals true, like this ```ng-dblclick="focused=true"```.
  So, to recap...We are telling the input box and the update button to hide, because ng-show is default false. We are also telling the span tag to show, because ng-hide is default false. And when we double click on the visible span tag, we are telling the variable "focused" to switch from false to true. This in turn tells the input box and the update button to show, because ng-show is now true. This also tells the span div to hide, because ng-hide is now true.


* Awesome! We now have a fully functioning CRUD To Do App that has the ability to sort and filter. We also created some cool show and hide functionality using an double click listener. I challenge you to go out and find more.

##Continued Practice

If you have more time, style your app or add some new functionality using this link to [Angular Docs](https://docs.angularjs.org/api).

##Copyright

(c) Montana Code School, 2016.
