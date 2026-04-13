import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p>No tasks yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left' }}>
      {tasks.map((task) => (
        <li 
          key={task.id} 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '10px',
            borderBottom: '1px solid var(--border)',
            backgroundColor: 'var(--bg)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
              style={{ cursor: 'pointer' }}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? 'gray' : 'var(--text)' }}>
              {task.text}
            </span>
          </div>
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
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
