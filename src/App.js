import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import history from './service/history';
import Header from './components/Header/Header';
import Rotas from './routes';
import GlobalStyled from './styles/GlobalStyled';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Rotas />
        <GlobalStyled />
        <ToastContainer autoClose={5000} className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;
