import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HostApp } from './app';

export const HostBasic = () => {
  return (
    <MemoryRouter>
      <HostApp />
    </MemoryRouter>
  );
};
