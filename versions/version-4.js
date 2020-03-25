// VERSION 4 ------------------> Booleans

// todoList.addTodo should add objects

var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('My todos:', this.todos);
	},
	addTodo: function(todoText) {
		/* function add an object */
		this.todos.push({
			todoText: todoText,
			completed: false /* here comes a boolean true or false value */
		});
		this.displayTodos();
	}
};

// todoList.changeTodo should change the todoText property

var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('My todos:', this.todos);
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(position, todoText) {
		/* the function change the object on the `position` and  change its todotext with the new todoText which is a parameter in the function */
		this.todos[position].todoText = todoText;
		this.displayTodos();
	}
};

// todoList.toggleCompleted should flip the completed property
var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('My todos:', this.todos);
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
		todo.completed = !todo.completed; /* the trick is here.. we change the boolean value. if it is true, it returns false and vice versa */
		this.displayTodos();
	}
};

/************************************************************************************************************** */
