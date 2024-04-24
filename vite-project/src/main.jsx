import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from './redux/store/usersReducer.js';
import modalsReducer from './redux/store/modalsReducer.js';
import selectedUserReducer from './redux/store/selectedUserReducer.js';
import windowReducer from './redux/store/windowReducer.js';
const store = configureStore({
  reducer: {
    selectedUser: selectedUserReducer,
    modals : modalsReducer,
    users : usersReducer,
    windowWidth : windowReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
   
    <Provider store={store}>
    <App />
  </Provider>
  
)
