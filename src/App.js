import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { useCallback, useReducer, useRef, useState } from 'react'

function createBulkTodos() {
  const array = []
  for(let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `to do ${i}`,
      checked: false,
    })
  }
  return array
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter(todo => {
        return todo.id !== action.id
      })
    case 'TOGGLE':
      return todos.map(todo => {
        return todo.id === action.id ? {...todo, checked : !todo.checked} : todo
      })
    default:
      return todos
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  // const [todos, setTodos] = useState(createBulkTodos)
    // {
    //   id: 1,
    //   text: 'Laundry',
    //   checked: true
    // },
    // {
    //   id: 2,
    //   text: 'Study React',
    //   checked: true
    // },
    // {
    //   id: 3,
    //   text: 'Word',
    //   checked: false
    // }


  const nextId = useRef(2501)

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      }
      // setTodos(todos => todos.concat(todo))
      dispatch({ type: 'INSERT', todo })
      nextId.current += 1
    }, []
  )

  const onDelete = useCallback((id) => {
    // setTodos(todos => todos.filter(todo => {
    //   return todo.id !== id
    // }))
    dispatch({ type: 'REMOVE', id })
  }, [])

  const onCheck = useCallback((id) => {
    // setTodos(todos => todos.map(todo => {
    //   return todo.id === id ? {...todo, checked : !todo.checked} : todo
    // }))
    dispatch({ type: 'TOGGLE', id })
  }, [])

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
