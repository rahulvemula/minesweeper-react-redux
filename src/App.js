import React from 'react';
import Header from './components/Header';
import './App.css';
import Test from './components/Test';
import { Provider } from "react-redux";
import store from "./store"

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
      </Provider>
      <Provider store={store}>
        <Test />
      </Provider>
    </div>
  );
}

export default App;
