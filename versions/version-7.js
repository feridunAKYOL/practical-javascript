var todoList = {
	todos: [],
	displayTodos: function() {
		debugger;
		if (this.todos.length === 0) {
			console.log('your todo list is empty!');
		} else {
			console.log('My Todos:');
			for (i = 0; i < this.todos.length; i++) {
				if (this.todos[i].completed === true) {
					console.log('(x)', this.todos[i].todoText);
				} else {
					console.log('( )', this.todos[i].todoText);
				}
			}
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completeTodos = 0;
		for (i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completeTodos++;
			}
		}
		if (completeTodos === totalTodos) {
			for (i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			} // case 2 : otherwise, make everything true.
		} else {
			for (i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}
};

// 1. we want to get  access to the display todos & toggle All button.
let displayTodosButton = document.getElementById('displayTodosButton');
let toggleAllButton = document.getElementById('toggleAllButton');
// 2.we want to run  displayTodos method, when someone click the display button todos button.
displayTodosButton.addEventListener('click', function() {
	todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
	todoList.toggleAll();
});
