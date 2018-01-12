import React from 'react';
import styled from 'styled-components';
import { appLightGrey } from '../styles';

const Navbar = () => (
  <Wrap>
    <NavLeft>
      <Logo />
      <Tag><strong>Thema 3:</strong> Familie</Tag>
    </NavLeft>
    <NavCenter>
      <span class="long-text">Afbeelding </span>1 of 8
    </NavCenter>
    <NavRight>
      <img src={require('../icons/Checkmark_good@2x.png')} alt="correct" width="20" />
      &nbsp;&nbsp;
      <span>0&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <img src={require('../icons/Cross_wrong@2x.png')} alt="incorrect" width="15" />
      &nbsp;&nbsp;
      <span>2&nbsp;&nbsp;</span>
      <img src={require('../icons/Close@2x.png')} alt="close" width="30" />
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
  .long-text {
    display: none;

    @media (min-width: 1023px) {
      display: flex;
    }  
  }
`;

const Tag = styled.div`
  display: none;
  
  @media (min-width: 1023px) {
    display: flex;
  }   
`;

export default Navbar;
