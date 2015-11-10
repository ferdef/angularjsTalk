app.directive("todoDirective", function() {
	return {
		restrict: 'E',
		templateUrl: "partials/todo.html",
		replace: true,
		controller: function($scope) {
			$scope.todos = [];
			
			$scope.addItem = function(todo) {
				todo.entrance = new Date();
				$scope.todos.push(todo);
				delete $scope.todo;	
			};
			
			$scope.removeItem = function(itemPos) {
				$scope.todos.splice(itemPos, 1);
			}
		}
	};
});