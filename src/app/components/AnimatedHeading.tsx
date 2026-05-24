import { useEffect, useState } from 'react';

type AnimatedHeadingProps = {
  text: string;
  delay?: number;
  charDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  lineStyles?: React.CSSProperties[];
};

export default function AnimatedHeading({
  text,
  delay = 0,
  charDelay = 30,
  className,
  style,
  lineStyles = []
}: AnimatedHeadingProps) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const lines = text.split('\n');
  let absoluteCharIndex = 0;

  return (
    <h1 className={className} style={style}>
      {lines.map((line, lineIndex) => {
        const words = line.split(' ');
        const lStyle = lineStyles[lineIndex] || {};
        
        return (
          <div key={lineIndex} className="flex flex-wrap justify-center gap-x-2 md:gap-x-3">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="whitespace-nowrap inline-flex">
                {word.split('').map((char, charIndexInWord) => {
                  const currentDelay = absoluteCharIndex * charDelay;
                  absoluteCharIndex++;
                  
                  return (
                    <span
                      key={charIndexInWord}
                      className="inline-block"
                      style={{
                        ...lStyle,
                        opacity: started ? 1 : 0,
                        transform: started
                          ? 'translateX(0) translateY(0) scale(1)'
                          : 'translateX(-12px) translateY(8px) scale(0.95)',
                        filter: started ? 'blur(0)' : 'blur(4px)',
                        transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1), filter 600ms cubic-bezier(0.16, 1, 0.3, 1)`,
                        transitionDelay: `${currentDelay}ms`,
                        willChange: 'opacity, transform, filter',
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </span>
            ))}
          </div>
        );
      })}
    </h1>
  );
}
