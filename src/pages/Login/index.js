import React from 'react';

import { Container } from '../../styles/GlobalStyled';

import { Title } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login <small>Hello word</small>
      </Title>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
        reiciendis mollitia aut quidem quae omnis, necessitatibus maxime
        possimus molestiae dolores, tempora, magni deleniti cumque maiores ipsam
        facere. Tempore, expedita.
      </p>
      <button>Enviar</button>
    </Container>
  );
}
