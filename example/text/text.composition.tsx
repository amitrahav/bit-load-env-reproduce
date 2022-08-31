import React from 'react';
import { Text } from './text';

export const BasicText = () => {
  const t = process.env.REACT_APP_TEXT
  return (
    <Text>{t}</Text>
  );
}
