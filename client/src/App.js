import React from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import { Provider } from "react-redux";
import store from './state/types/store';
import AppRouter from './components/router';



function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
