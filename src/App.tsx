import { FC } from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

const router = createRouter({ routeTree });

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
