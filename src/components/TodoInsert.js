import React, { useState } from 'react'
import './TodoInsert.scss'
import { MdAdd } from 'react-icons/md'

const TodoInsert = () => {
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState([])
  const inputChange = e => {
    setInput(e.target.value)
  }
  const addTodo = (e) => {
    console.log(1)
    setTodoList([
      ...todoList,
      input
    ])
    // setInput('')
  }

  return (
    <form className="TodoInsert">
      <input
        placeholder="Add to-do"
        type="text"
        value={input}
        onChange={(e) => inputChange(e)}
      />
      <button
        onClick={addTodo}>
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert
