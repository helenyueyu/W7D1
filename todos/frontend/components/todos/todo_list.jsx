import React from 'react'; 

import TodoListItem from './todo_list_item'; 
import TodoForm from './todo_form'; 

const TodoList = props => (
  <div>
    <TodoForm /> 
    {props.todos.map(item => <TodoListItem key={item.id} item={item}/>)}
  </div>
)

export default TodoList; 