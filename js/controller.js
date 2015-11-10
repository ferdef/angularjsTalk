app.controller("myAppCtrl", function($scope) {
	$scope.todos = [];
	
	$scope.addItem = function(todo) {
		todo.entrance = new Date();
		$scope.todos.push(todo);
		delete $scope.todo;	
	};
	
	$scope.removeItem = function(itemPos) {
		$scope.todos.splice(itemPos, 1);
	}
});