import React, { useCallback } from 'react'
import { List } from 'react-virtualized'
import './TodoList.scss'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, onDelete, onCheck }) => {
  const rowRender = useCallback(({ index, key, style }) => {
    const todo = todos[index]
    return (
      <TodoListItem
        todo={todo}
        key={key}
        onDelete={onDelete}
        onCheck={onCheck}
        style={style}
        />
    )
  }, [onDelete, onCheck, todos])

  return (
    <List
      className="TodoList"
      width={512}
      height={413}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRender}
      list={todos}
      style={{ outline: 'none' }}
    />
  )
}

export default React.memo(TodoList)
