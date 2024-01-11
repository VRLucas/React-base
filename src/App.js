import React from 'react';

import Header from './components/Header';

import Login from './pages/Login';

import GlobalStyled from './styles/GlobalStyled';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyled />
    </>
  );
}

export default App;
