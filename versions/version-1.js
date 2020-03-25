// VERSION 1

/* it should have a place to store todos */
var todos = [ 'item-1', 'item-2', 'item-3' ];

/* it should have a way to display todos*/

console.log('Hello there', 'Feridun'); // output is 'Hello there' , 'Feridun'
console.log(todos); // output is ['item-1' , 'item-2', 'item-3']
console.log('todos'); // write output 'todos'
console.log('my todos: ', todos); // output is my todos: ['item-1' , 'item-2', 'item-3']

/* it should have a way to add new todos*/

todos.push('item-4'); // add 'item-4' to the end of the array
todos.push('item-5'); // add 'item-5' to the end of the array
console.log(todos); // output is ['item-1' , 'item-2', 'item-3' ,'item-4','item-5'];

/* it should have a way to change a todo*/

todos[0] = 'item-1 updated'; // change the first item
console.log(todos); // output is ['item-1 updated' , 'item-2', 'item-3' ,'item-4','item-5'];

/* it should have a way to delete a todo*/

todos.splice(0, 1); //  delete the first element of the array.... first number is which index is the start point and the second number is how many item do you want to delete
console.log(todos); // output is ['item-2', 'item-3' ,'item-4','item-5'];
//..........................................................................
