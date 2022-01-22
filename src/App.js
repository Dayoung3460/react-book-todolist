import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { useState } from 'react'

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

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
