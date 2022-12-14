import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BraidsByTifeh from './BraidsByTifeh';
import reportWebVitals from './reportWebVitals';

const target = ReactDOM.createRoot(document.getElementById('braidsbytifeh') as HTMLElement);
target.render(<BraidsByTifeh />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
