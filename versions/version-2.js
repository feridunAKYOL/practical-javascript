// VERSION 2  -----> Functions

// an example for function

function sayHiTo(person) {
	console.log('hi', person);
}
sayHiTo('feridun'); // output is 'hi feridun'

// it should have a function to display todos

var todos = [ 'item-1', 'item-2', 'item-3' ];
function displayTodos() {
	console.log('My todos:', todos);
}
displayTodos(); // output is 'My todos ['item-1', 'item-2', 'item-3']'

// it should have a function to add new todos

function addTodo() {
	todos.push('new todo');
}
addTodo(); // undefined
todos; // [ 'item-1', 'item-2', 'item-3', 'new todo'];

//with a parameter:

function addNewTodo(newTodo) {
	todos.push(newTodo);
	displayTodos();
}

// it should have a function to change a todos

function changeTodo(position, newValue) {
	// change the index 0 element with `new value`
	todos[position] = newValue;
	displayTodos();
}
changeTodo(0, 'changed'); // output is [ 'changed', 'item-2', 'item-3', 'new todo'];

// It should have a function to delete a todo
function deleteTodos(position) {
	todos.splice(position, 1);
	displayTodos();
}

deleteTodos(0); // output is ['item-2', 'item-3', 'new todo'];

// Important Note: when you are inside of a function, you can look out and see the data but the opposite is not true. if you are outside , you can't look in.

//.....................................................................
