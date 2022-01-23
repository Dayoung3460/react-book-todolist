import React, { useCallback, useState } from 'react'
import './TodoInsert.scss'
import { MdAdd } from 'react-icons/md'

const TodoInsert = ({ onInsert }) => {
  const [input, setInput] = useState('')

  const inputChange = useCallback((e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }, [])

  const addTodo = useCallback(() => {
    onInsert(input)
    setInput('')
  }, [onInsert, input])

  return (
    <div className="TodoInsert">
      <input
        placeholder="Add to-do"
        type="text"
        value={input}
        onChange={inputChange}
      />
      <button onClick={addTodo}>
        <MdAdd />
      </button>
    </div>
  )
}

export default TodoInsert
