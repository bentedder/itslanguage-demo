import React from 'react';
import styled from 'styled-components';
import { appLightGrey } from '../styles';

const Navbar = () => (
  <Wrap>
    <NavLeft>
      <Logo></Logo>
      <div>Thema 3: Familie</div>
    </NavLeft>
    <NavCenter>
      Afbeelding 1 of 8
    </NavCenter>
    <NavRight>
      status
    </NavRight>
  </Wrap>
);

const Wrap = styled.div`
  display: flex;
  flex: 0 0 50px;
  border-bottom: 1px solid ${appLightGrey};
  background: white;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background: #ccc;
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
`;

const NavLeft = NavInner.extend`
  margin-left: 10px;
`;
const NavRight = NavInner.extend`
  margin-right: 10px;
`;

const NavCenter = NavInner.extend`
  display: none;
  @media (min-width: 700px) {
    display: flex;
  }   
`;

export default Navbar;
