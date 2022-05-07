import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import styles from './scss/application.scss';

// React 18 render of the React Component Tree
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);