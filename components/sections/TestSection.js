'use client';

import { useState } from 'react';

import { Box } from '@chakra-ui/react';

export const TestSection = (props) => {
  const [count, setCounter] = useState(0);
  console.log(props, ' TestSection props');

  return (
    <div>
      test section
      <div>{props?.title}</div>
      <div>{props?.serviceField}</div>
      <button onClick={() => setCounter(count + 1)}>add</button>
      <div>{count}</div>
    </div>
  );
};
