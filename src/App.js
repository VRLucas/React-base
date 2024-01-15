import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Rotas from './routes';
import GlobalStyled from './styles/GlobalStyled';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
