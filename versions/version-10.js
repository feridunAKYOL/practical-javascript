var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},
	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
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
	}
};

var handlers = {
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	},
	addTodo: function() {
		let addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		let changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleCompleted: function() {
		let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	}
};

let view = {
	displayTodos: function() {
		let todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		for (let i = 0; i < todoList.todos.length; i++) {
			let todoLi = document.createElement('li');
			let todo = todoList.todos[i];
			let todoTextWithCompletion = '';
			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}
			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}
	},
	createDeleteButton: function() {
		let deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function() {
		let todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function(event) {
			console.log(event.target.parentNode.id);
			// get the element that was clicked on.
			let elementClicked = event.target;
			// check if the elementClicked is a delete button.
			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};
view.setUpEventListeners();
