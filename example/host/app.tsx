import React from 'react';
import { Routes, Route } from 'react-router-dom';

export function HostApp() {
  console.log({process})
  const t = process.env.REACT_APP_TEXT

  return (
    <>
       {/* header component */}
        <Routes>
          <Route path="/" element={<div>{t}</div>}>
             {/* home page component */}
          </Route>

          <Route path="/about">
             {/* about page component */}
          </Route>

        </Routes>
        {/* footer component */}
    </>
  );
}
