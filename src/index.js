import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppRouter from "./routers/AppRouter";

//if app gets more complex, can be converted to redux, setup with a store, combined reducers and a Provider HOC component from redux to connect child components to the store
ReactDOM.render(
  <React.StrictMode>
      <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
