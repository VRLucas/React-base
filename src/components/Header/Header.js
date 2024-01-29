import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt />
      </Link>
      <Link to="/user">
        <FaUserAlt />
      </Link>
      {botaoClicado ? 'Botao Clicado' : 'Não clicado'}
    </Nav>
  );
}
