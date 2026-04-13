import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, filter, dispatch } = useContext(TaskContext);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'ACTIVE') return !task.completed;
    if (filter === 'COMPLETED') return task.completed;
    return true; // 'ALL'
  });

  return (
    <div>
      {tasks.length > 0 && (
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button 
            onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ALL' })}
            style={{ 
              fontWeight: filter === 'ALL' ? 'bold' : 'normal', 
              padding: '6px 12px', 
              cursor: 'pointer',
              backgroundColor: filter === 'ALL' ? '#e0e0e0' : 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              color: 'var(--text)'
            }}
          >
            All
          </button>
          <button 
            onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ACTIVE' })}
            style={{ 
              fontWeight: filter === 'ACTIVE' ? 'bold' : 'normal', 
              padding: '6px 12px', 
              cursor: 'pointer',
              backgroundColor: filter === 'ACTIVE' ? '#e0e0e0' : 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              color: 'var(--text)'
            }}
          >
            Active
          </button>
          <button 
            onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'COMPLETED' })}
            style={{ 
              fontWeight: filter === 'COMPLETED' ? 'bold' : 'normal', 
              padding: '6px 12px', 
              cursor: 'pointer',
              backgroundColor: filter === 'COMPLETED' ? '#e0e0e0' : 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              color: 'var(--text)'
            }}
          >
            Completed
          </button>
        </div>
      )}
      
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
