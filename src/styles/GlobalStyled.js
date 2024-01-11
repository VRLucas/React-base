import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor, linkColor } from '../config/colors';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
body {
  background-color: ${primaryDarkColor};
  color: ${primaryDarkColor} ;
}
html, body, #root {
  height: 100%;
  width: 100%;
}
button {
  cursor: pointer;
  background-color: ${primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px ;
  border-radius: 8px;

}
a{
  text-decoration: none;
  color: ${primaryColor};
}
ul {
  list-style: none;
}

`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
