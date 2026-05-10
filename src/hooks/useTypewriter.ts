import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseDelay = 2000) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentWord = words[loopNum % words.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => currentWord.substring(0, prev.length - 1));
        if (text.length <= 1) {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prev) => currentWord.substring(0, prev.length + 1));
        if (text.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseDelay]);

  return text;
}
