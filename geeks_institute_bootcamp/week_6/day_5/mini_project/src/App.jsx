import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let calculatedResult;
    switch (operation) {
      case 'add':
        calculatedResult = n1 + n2;
        break;
      case 'subtract':
        calculatedResult = n1 - n2;
        break;
      case 'multiply':
        calculatedResult = n1 * n2;
        break;
      case 'divide':
        if (n2 === 0) {
          calculatedResult = 'Cannot divide by zero';
        } else {
          calculatedResult = n1 / n2;
        }
        break;
      default:
        calculatedResult = 'Invalid operation';
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator-container" style={{ padding: '30px', maxWidth: '400px', margin: '40px auto', textAlign: 'center', fontFamily: 'sans-serif', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#333', marginTop: 0 }}>React Calculator</h1>
      <div style={{ marginBottom: '15px' }}>
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
          placeholder="Enter first number"
          style={{ padding: '10px', width: '100%', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px', backgroundColor: '#f9f9f9' }}
        >
          <option value="add">Addition (+)</option>
          <option value="subtract">Subtraction (-)</option>
          <option value="multiply">Multiplication (×)</option>
          <option value="divide">Division (÷)</option>
        </select>
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
          placeholder="Enter second number"
          style={{ padding: '10px', width: '100%', marginBottom: '15px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
        />
      </div>
      <button 
        onClick={calculate}
        style={{ padding: '12px 24px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', width: '100%', fontWeight: 'bold', transition: 'background-color 0.2s' }}
      >
        Calculate
      </button>
      
      {result !== null && (
        <div style={{ marginTop: '25px', padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '6px', border: '1px solid #90caf9' }}>
          <h2 style={{ margin: 0, color: '#1565c0', fontSize: '24px' }}>Result: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
