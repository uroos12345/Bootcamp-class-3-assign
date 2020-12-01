import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// ReactDOM.render(
//   React.createElement('div', null,"Hello World from creatElement", React.createElement('div', null, "Hello in span/div create element")),
//   document.getElementById('root')
// );

ReactDOM.render(
  <div><App name = "Maria" age = {25}/></div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
