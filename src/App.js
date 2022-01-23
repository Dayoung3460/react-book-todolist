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

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
