import React, { createContext, useReducer } from 'react';

// Define the initial state (an empty array of tasks)
const initialState = [];

// Create the context
export const TaskContext = createContext();

// Define the reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'REMOVE_TASK':
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

// Create the provider component
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
