import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Myfood } from './context/food_context';
import { AuthContextProvider } from './context/Auth_context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <Myfood>
      <React.StrictMode>
        <App />
      </React.StrictMode>
   </Myfood>
  </AuthContextProvider>
);

