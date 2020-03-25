// VERSION 3 ------------> objects

var MyComputer = {
	operatingSystem: 'Ubuntu',
	screenSize: '15 inches',
	purchaseYear: 2020
};

MyComputer.operatingSystem; // 'Ubuntu'
MyComputer.screenSize; // '15 inches'
MyComputer.purchaseYear; //2020

var feridun = {
	name: 'feridun',
	sayName: function() {
		console.log(this.name);
	}
};
feridun.sayName(); // output is 'feridun'

// It should store the todos array on an object

var todoList = {
	todos: [ 'item-1', 'item-2', 'item-3' ]
};

// It should have a displayTodos method

var todoList = {
	todos: [ 'item-1', 'item-2', 'item-3' ],
	displayTodos: function() {
		// here we have added a function to display
		console.log('My todos:', this.todos);
	}
};

//  It should have an addTodo method

var todoList = {
	todos: [ 'item-1', 'item-2', 'item-3' ],
	displayTodos: function() {
		console.log('My todos:', this.todos);
	}, // here we have added a function to add a todo
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	}
};

// It should have a changeTodo method

var todoList = {
	todos: [ 'item-1', 'item-2', 'item-3' ],
	displayTodos: function() {
		console.log('My todos:', this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	}, // here we have added a function to change a value
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	}
};

// It should have a deleteTodo method

var todoList = {
	todos: [ 'item-1', 'item-2', 'item-3' ],
	displayTodos: function() {
		console.log('My todos:', this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function(position, newValue) {
		this.todos[position] = newValue;
		this.displayTodos();
	}, // here we have added a function to delete a value
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
		this.displayTodos();
	}
};

/************************************************************************************************ */
