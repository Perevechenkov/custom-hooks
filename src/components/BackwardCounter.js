import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

export default function BackwardCounter(props) {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
}
