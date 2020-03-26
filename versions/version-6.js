// VERSION 6

//  .toggleAll: If everything's true, make everything false

var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('your todo list is empty!');
		} else {
			console.log('My todos:', this.todos);
			for (i = 0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText);
				if (this.todos[i].completed === true) {
					console.log('( x )', this.todos[i].todoText);
				} else {
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
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completeTodos = 0; // get number of completed todos
		for (i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completeTodos++;
			}
		}
		// case 1 : if everything is true , make everything false.
		if (completeTodos === totalTodos) {
			// make everything false
			for (i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		}
		this.displayTodos();
	}
};

//  .toggleAll: Otherwise, make everything true

var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('your todo list is empty!');
		} else {
			console.log('My todos:', this.todos);
			for (i = 0; i < this.todos.length; i++) {
				console.log(this.todos[i].todoText);
				if (this.todos[i].completed === true) {
					console.log('( x )', this.todos[i].todoText);
				} else {
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
/************************************* */
/************* interlude Data types and comparisons */
/**
 * Objects----> can be complex as you want such as functions, arrays, todolist
 * Primitives:
			 * string
			 * Number
			 * Boolean
			 * Undefined ---> that hasn't been set yet
			 * Null -----> nothing

	 */
/**
		* {} === {} ----> this returns false
		*[1,2,3] === [1,2,3] ----> this returns false
		var A = {};
		A === A -----> return true
	  */
/**
		* objects have references. so {} !== {}
		but primitives have values so 2 = 2 ;
	  */
/*
		* var myHouse1 = {color : 'blue'};
			var myHouse2 = myHouse1;
			 myHouse2.color = 'red';
				myHouse1.color ---> returns 'red'
				 myHouse2.color --------> returns 'red'
	  */
