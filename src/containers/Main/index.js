import styled, { css } from 'styled-components';

const MainPrivate = ({ isAuthenticated }) =>
  isAuthenticated &&
  css`
    padding: 1em 0 0;
  `;

const Main = styled.main`
  min-height: 100vh;
  ${MainPrivate};
`;

export default Main;
