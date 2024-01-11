import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import Font from 'react-font';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="">
        <FaHome size={24} />
      </a>
      <a href="">
        <FaSignInAlt />
      </a>
      <a href="">
        <FaUserAlt />
      </a>
    </Nav>
  );
}
