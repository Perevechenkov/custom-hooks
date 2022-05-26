import { useState, useEffect } from 'react';

import Card from './Card';

export default function ForwardCounter(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevVal => ++prevVal);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <Card>{counter}</Card>;
}
