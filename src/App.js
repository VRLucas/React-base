import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import history from './service/history';
import Header from './components/Header/Header';
import Rotas from './routes';
import GlobalStyled from './styles/GlobalStyled';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Rotas />
      <GlobalStyled />
    </Router>
  );
}

export default App;
