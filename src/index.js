import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import {StrictMode} from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<Home />} />
        <Route path="/details" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  )


reportWebVitals();
