import React, { createContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  tasks: [],
  filter: 'ALL' // 'ALL', 'ACTIVE', 'COMPLETED'
};

// Create the context
export const TaskContext = createContext();

// Define the reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }] };
    case 'TOGGLE_TASK':
      return { ...state, tasks: state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      )};
    case 'REMOVE_TASK':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case 'EDIT_TASK':
      return { ...state, tasks: state.tasks.map((task) => 
        task.id === action.payload.id ? { ...task, text: action.payload.text } : task
      )};
    case 'FILTER_TASKS':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

// Create the provider component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, filter: state.filter, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
