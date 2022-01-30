import React from 'react'
import './TodoList.scss'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, onDelete, onCheck }) => {

  return (
    <div className="TodoList">
      { todos.map((todo) => <TodoListItem key={todo.id} todo={todo} onCheck={onCheck} onDelete={onDelete} />) }
    </div>
  )
}

export default TodoList
