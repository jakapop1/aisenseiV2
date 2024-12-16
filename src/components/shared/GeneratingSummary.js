import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

const TypewriterEffect = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const speedRef = useRef(2); // Base characters per frame
  const rafRef = useRef(null);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastUpdateRef.current) lastUpdateRef.current = timestamp;
      
      const deltaTime = timestamp - lastUpdateRef.current;
      
      // Update every 20ms (50fps)
      if (deltaTime >= 20) {
        if (currentIndex < text.length) {
          // Vary speed based on punctuation
          let charsToAdd = speedRef.current;
          const nextChar = text[currentIndex];
          
          // Slow down for punctuation and new lines
          if ('.,:;!?\n'.includes(nextChar)) {
            charsToAdd = 1;
            // Add slight pause after punctuation
            if (Math.random() < 0.3) {
              lastUpdateRef.current = timestamp + 200; // 200ms pause
            }
          }

          const nextIndex = Math.min(currentIndex + charsToAdd, text.length);
          setDisplayedText(text.slice(0, nextIndex));
          setCurrentIndex(nextIndex);
          
          // Randomize base speed slightly for more natural feel
          speedRef.current = Math.random() * 2 + 1;
          lastUpdateRef.current = timestamp;
        } else if (onComplete) {
          onComplete();
          return;
        }
      }
      
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [text, currentIndex, onComplete]);

  return (
    <div className="font-mono whitespace-pre-wrap text-sm">{displayedText}</div>
  );
};

const GeneratingSummary = ({ text, onComplete }) => {
  return (
    <div className="module-card overflow-hidden">
      <div className="flex items-center space-x-2 mb-4">
        <Terminal className="w-5 h-5 text-blue-400 animate-pulse" />
        <h3 className="text-lg text-white">Analyzing PCAP...</h3>
      </div>
      
      <div className="bg-gray-900 rounded-lg p-4 text-gray-300 max-h-[600px] overflow-y-auto">
        <TypewriterEffect 
          text={text} 
          onComplete={onComplete}
        />
      </div>
    </div>
  );
};

export default GeneratingSummary;