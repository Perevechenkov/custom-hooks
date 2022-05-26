import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

export default function ForwardCounter(props) {
  const counter = useCounter();

  return <Card>{counter}</Card>;
}
