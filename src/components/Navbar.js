import React from 'react';
import styled from 'styled-components';
import { appLightGrey } from '../styles';

const Navbar = () => (
  <Wrap>
    <NavLeft>
      <Logo />
      <div><strong>Thema 3:</strong> Familie</div>
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
  height: 50px;
  border-bottom: 1px solid ${appLightGrey};
  background: white;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background: url(${require('../icons/Logo@2x.png')}) no-repeat center center;
  background-size: contain;

  img {
    width: 100%;
  }
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
  @media (min-width: 1023px) {
    display: flex;
  }   
`;

export default Navbar;
