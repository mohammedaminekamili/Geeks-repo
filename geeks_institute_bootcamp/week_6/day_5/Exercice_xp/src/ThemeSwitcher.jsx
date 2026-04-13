import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem', background: theme === 'light' ? '#f0f0f0' : '#444' }}>
      <button 
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: theme === 'light' ? '#333' : '#fff',
          color: theme === 'light' ? '#fff' : '#333'
        }}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
