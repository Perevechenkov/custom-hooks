import { useState, useEffect } from 'react';

export default function useCounter(forwards = true) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (forwards) {
        setCounter(prevVal => ++prevVal);
      } else {
        setCounter(prevVal => --prevVal);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return counter;
}
