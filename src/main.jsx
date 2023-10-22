import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKiqhhCNPRAfKg9BGdH4PMxwsLIZcTwqQ",
  authDomain: "react-proyecto-3e998.firebaseapp.com",
  projectId: "react-proyecto-3e998",
  storageBucket: "react-proyecto-3e998.appspot.com",
  messagingSenderId: "686469831954",
  appId: "1:686469831954:web:1e34ae2fb8cf49a6a9e7cb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)