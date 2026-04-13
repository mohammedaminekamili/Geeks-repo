import React, { useState, useRef, useContext, useEffect } from 'react';
import { TaskContext } from './TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (editInputRef.current && editInputRef.current.value.trim() !== '') {
      dispatch({ 
        type: 'EDIT_TASK', 
        payload: { id: task.id, text: editInputRef.current.value } 
      });
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') {
      setIsEditing(false);
      if(editInputRef.current) editInputRef.current.value = task.text;
    }
  };

  return (
    <li 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
          style={{ cursor: 'pointer' }}
        />
        {isEditing ? (
          <input 
            type="text" 
            ref={editInputRef} 
            defaultValue={task.text}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            style={{ padding: '4px', flex: 1, marginRight: '10px' }}
          />
        ) : (
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'gray' : 'var(--text)', wordBreak: 'break-all', textAlign: 'left' }}>
            {task.text}
          </span>
        )}
      </div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button 
          onClick={() => {
            if (isEditing) {
              handleSave();
            } else {
              setIsEditing(true);
            }
          }}
          style={{
            padding: '6px 12px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button 
          onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
          style={{
            padding: '6px 12px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
