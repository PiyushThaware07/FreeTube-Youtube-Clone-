import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Redux
import { Provider } from 'react-redux';
import store from './Redux/store.jsx';
// Google Auth
import { GoogleOAuthProvider } from '@react-oauth/google';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="265484024464-v9nejhrbjvgl5r2bfjspnpun8no0opht.apps.googleusercontent.com">
      <Provider store={store} >
        <App />
      </Provider>
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
