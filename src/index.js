import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* import { initializeApp } from "firebase/app"; */

/* const firebaseConfig = {
  apiKey: "AIzaSyBUaLW9uW5zJHYDtfgPFEhLM9iFR8HgUpk",
  authDomain: "avalon-indumentaria.firebaseapp.com",
  projectId: "avalon-indumentaria",
  storageBucket: "avalon-indumentaria.appspot.com",
  messagingSenderId: "66318605017",
  appId: "1:66318605017:web:073b43c6a3a2b7ba5a3cc8"
}; */

// Initialize Firebase
/* initializeApp(firebaseConfig); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

