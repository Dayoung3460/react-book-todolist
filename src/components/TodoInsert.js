import React, { useCallback, useState } from 'react'
import './TodoInsert.scss'
import { MdAdd } from 'react-icons/md'

const TodoInsert = ({ onInsert }) => {
  const [input, setInput] = useState('')

  const inputChange = useCallback((e) => {
    setInput(e.target.value)
  }, [])

  const addTodo = useCallback((e) => {
    e.preventDefault()
    onInsert(input)
    setInput('')
  }, [onInsert, input])

  return (
    <form className="TodoInsert" onSubmit={addTodo}>
      <input
        placeholder="Add to-do"
        type="text"
        value={input}
        onChange={inputChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}

export default TodoInsert
