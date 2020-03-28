function addTodo() {
	let addTodoTextInput = document.getElementById('addTodoTextInput');
	todoList.addTodo(addTodoTextInput.value);
	addTodoTextInput.value = '';
	view.displayTodos();
}

function changeTodo() {
	let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
	let changeTodoTextInput = document.getElementById('changeTodoTextInput');
	todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
	changeTodoPositionInput.value = '';
	changeTodoTextInput.value = '';
	view.displayTodos();
}

function toggleCompleted() {
	let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
	todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
	toggleCompletedPositionInput.value = '';
	view.displayTodos();
}

function toggleAll() {
	todoList.toggleAll();
	view.displayTodos();
}

function deleteTodo(event) {
	debugger;
	let elementClicked = event.target;
	if (elementClicked.className === 'deleteButton') {
		todoList.deleteTodo(parseInt(elementClicked.parentNode.id));
		view.displayTodos();
	}
}
