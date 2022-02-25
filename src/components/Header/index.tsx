import React from 'react';
import { Container } from './style';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Fiter Collaborator" />
    </Container>
  );
};

export default Header;
