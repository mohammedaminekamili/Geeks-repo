import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length);
    }
  };

  return (
    <div style={{ margin: '20px 0', padding: '20px', border: '1px solid var(--border)', borderRadius: '8px' }}>
      <h2>Character Counter</h2>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '100px',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--bg)',
          color: 'var(--text)'
        }}
      />
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Character count: {charCount}
      </p>
    </div>
  );
};

export default CharacterCounter;
