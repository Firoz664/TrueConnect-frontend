// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from "./routes/Routes";
import { RouterProvider } from 'react-router-dom';
import {DarkModeProvider, useDarkMode} from "./DarkModecontext"

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

root.render(
  <React.StrictMode>
   <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <DarkModeToggle/>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </DarkModeProvider>
  </React.StrictMode>,
);
