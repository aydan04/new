import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppRouter from './routers/AppRouter';
import './assets/sass/style.scss'
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)