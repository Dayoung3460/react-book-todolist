import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { useCallback, useRef, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Laundry',
      checked: true
    },
    {
      id: 2,
      text: 'Study React',
      checked: true
    },
    {
      id: 3,
      text: 'Word',
      checked: false
    }
  ])

  const nextId = useRef(4)

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      }
      setTodos([
        ...todos,
        todo
      ])
      nextId.current += 1
    }, [todos]
  )

  const onDelete = useCallback((id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(filteredTodos)
  }, [todos])

  const onCheck = useCallback((id) => {
    const changedTodos = todos.map(todo => {
      return todo.id === id ? {...todo, checked : !todo.checked} : todo
    })

    setTodos(changedTodos)
  }, [todos])

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onDelete={onDelete} onCheck={onCheck}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
