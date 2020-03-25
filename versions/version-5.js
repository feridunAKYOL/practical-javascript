// VERSION 5 -----------------> Loops of logic

/*
for (initialization , condition, final-expression){
}
*/
// namely

for (i = 0; i < 3; i++) {
	console.log('hey');
}

// Looping over arrays

for (i = 0; i < testArray.length; i++) {
	console.log('testArray[i]');
}

//  displayTodos should show .todoText

var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('My todos:', this.todos);
		for (i = 0; i < this.todos.length; i++) {
			// for each item in the array we write a function
			console.log(this.todos[i].todoText);
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
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};

/******** displayTodos should tell you if .todos is empty *******/
// if there are no todos -------> this.todos.length === 0
// console.log('your todo list is empty!')
// else
// print todos as normal

var todoList = {
	todos: [],
	displayTodos: function() {
		// our code is here
		if (this.todos.length === 0) {
			console.log('your todo list is empty!');
		} else {
			console.log('My todos:', this.todos);
			for (i = 0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText);
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
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};
/*****displayTodos should show .completed */

var todoList = {
	todos: [],
	displayTodos: function() {
		// our code is here
		if (this.todos.length === 0) {
			console.log('your todo list is empty!');
		} else {
			console.log('My todos:', this.todos);
			for (i = 0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText);
				// check if .completed  is true
				if (this.todos[i].completed === true) {
					// print with ( x )
					console.log('( x )', this.todos[i].todoText);
				} else {
					// print with ( )
					console.log('(  )', this.todos[i].todoText);
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
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
};
/*************************************************************** */
