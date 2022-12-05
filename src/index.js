import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import "./styles/global.scss";

createRoot(document.getElementById('app')).render(<App />);
