import React from 'react';

import { Container } from '../../styles/GlobalStyled';

import { Title, Text } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login<small>Hello word</small>
      </Title>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
        reiciendis mollitia aut quidem quae omnis, necessitatibus maxime
        possimus molestiae dolores, tempora, magni deleniti cumque maiores ipsam
        facere. Tempore, expedita.
      </Text>
      <a href="https://www.youtube.com/watch?v=CTJ0SknncO0&ab_channel=SamuelCampos">
        Vasco da Gama
      </a>
    </Container>
  );
}
