import React from 'react';

const CodeBlock = ({ code }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md my-4">
      <pre className="text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;