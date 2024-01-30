import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyled';
import { Form, Label } from './stlyed';

import * as action from '../../store/modules/example/action';
export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(action.cliacaBotaoRequest());
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
        <button type="button" onClick={handleClick}>
          Enviar
        </button>
      </Form>
    </Container>
  );
}
