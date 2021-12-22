import { useState } from 'react';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, checked, id } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};

export default TodoListItem;
