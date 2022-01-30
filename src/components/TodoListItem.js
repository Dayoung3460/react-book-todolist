import React from 'react'
import './TodoListItem.scss'
import cn from 'classnames'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md'

const TodoListItem = ({ todo, onDelete, onCheck }) => {
  const { id, text, checked } = todo

  const deleteTodo = (id) => onDelete(id)

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onCheck(id)}>
        { checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
         <div className="text">{ text }</div>
      </div>
      <div className="remove" onClick={() => deleteTodo(id)}>
        <MdRemoveCircleOutline/>
      </div>
    </div>
  )
}

export default TodoListItem
