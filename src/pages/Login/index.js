import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyled';
import { Form, Label } from './stlyed';
export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }
  return (
    <Container>
      <Form action="/" method="Post">
        <Label>
          <input type="email" name="email" placeholder="Email" />
        </Label>
        <br />
        <Label>
          <input type="password" name="password" placeholder="Password" />
        </Label>
        <button type="submit" onClick={handleClick}>
          Enviar
        </button>
      </Form>
    </Container>
  );
}
