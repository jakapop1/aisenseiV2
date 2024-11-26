import React from 'react';

const CopyCodeButton = ({ code, buttonColor = '#007bff' }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => alert('Code copied to clipboard!'))
      .catch((err) => console.error('Failed to copy code: ', err));
  };

  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      <pre
        style={{
          padding: '10px 10px 40px 10px', // Space for the button
          backgroundColor: '#f4f4f4',
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflow: 'auto',
        }}
      >
        <code style={{ fontFamily: 'Consolas, Monaco, Courier New, monospace' }}>
          {code}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          bottom: '10px', // Position at the bottom-right corner
          right: '10px',
          padding: '5px 15px',
          backgroundColor: '#527a5c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '12px',
        }}
      >
        Copy Code
      </button>
    </div>
  );
};

export default CopyCodeButton;
