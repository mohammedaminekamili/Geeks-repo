import { useState, useEffect } from 'react';
import './App.css';
import quotes from './Quotes';

const colors = [
  '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', 
  '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', 
  '#77B1A9', '#73A857'
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [color, setColor] = useState(colors[0]);

  const getRandomElement = (array, currentItem) => {
    let newItem;
    do {
      newItem = array[Math.floor(Math.random() * array.length)];
    } while (newItem === currentItem);
    return newItem;
  };

  const getNewQuote = () => {
    const newQuote = getRandomElement(quotes, quote);
    const newColor = getRandomElement(colors, color);
    setQuote(newQuote);
    setColor(newColor);
  };

  useEffect(() => {
    // Generate an initial random quote and color on mount
    getNewQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.style.transition = 'background-color 0.5s ease';
  }, [color]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', margin: 0, padding: 0 }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px 50px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        transition: 'color 0.5s ease',
        color: color
      }}>
        <h1 style={{ fontSize: '1.75em', textAlign: 'center', transition: 'color 0.5s ease', margin: 0 }}>
          "{quote.quote}"
        </h1>
        <p style={{ textAlign: 'right', fontStyle: 'italic', transition: 'color 0.5s ease', marginTop: '30px' }}>
          - {quote.author}
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
          <button 
            onClick={getNewQuote} 
            style={{
              backgroundColor: color,
              border: 'none',
              borderRadius: '4px',
              color: '#fff',
              padding: '10px 20px',
              fontSize: '1em',
              cursor: 'pointer',
              transition: 'background-color 0.5s ease',
              outline: 'none'
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
