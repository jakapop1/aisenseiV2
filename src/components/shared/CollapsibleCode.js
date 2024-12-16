import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CollapsibleCode = ({ code, previewLines = 5 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const lines = code.split('\n');
  const preview = lines.slice(0, previewLines).join('\n');
  const hasMore = lines.length > previewLines;
  
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-gray-50">
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm">
          {isExpanded ? code : preview}
          {!isExpanded && hasMore && (
            <span className="text-gray-400">...</span>
          )}
        </code>
      </pre>
      
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center py-2 px-4 border-t border-gray-200 text-sm text-gray-600 hover:bg-gray-100 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              Show More
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default CollapsibleCode;
