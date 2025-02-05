import React, { useEffect, useState } from 'react';

interface TextAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  backspace?: boolean;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text, className = '', delay = 0, backspace = false }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (backspace) {
          if (!isDeleting && currentIndex <= text.length) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex++;
          } else if (isDeleting && currentIndex >= 0) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex--;
          } else {
            setIsDeleting(!isDeleting);
            currentIndex = isDeleting ? 0 : text.length;
            // Add longer pause between cycles
            setTimeout(() => {}, 1000);
          }
        } else {
          if (currentIndex <= text.length) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }
      }, backspace ? 300 : 200); // Even slower typing speed

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay, backspace, isDeleting]);

  return (
    <div className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TextAnimation;