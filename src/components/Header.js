import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const WrapperHeader = styled.div`
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
  background-color: #1f1f1f;
  padding: 1rem;
  min-width: 350px;
  @media (min-width: 400px) {
    font-size: 1rem;
  }
  @media (min-width: 800px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1020px) {
    font-size: 1.2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 60rem;
`;

const HomeLink = styled(Link)`
  font-weight: bold;
  font-size: 1em;
  color: #4c6ef5;
  text-decoration: none;
  img {
    width: 3em;
    height: 3em;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  & :first-child {
    margin-left: 0;
  }
`;

const Nav = styled(NavLink)`
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 1em;
  font-weight: bold;
  color: #a9adc1;
  margin-left: 1.3em;
  :after {
    content: '';
    height: 4px;
    border-radius: 5px;
    display: block;
    position: relative;
    top: 3px;
    background-color: #ffd644;
    color: #a9adc1;

    transform: scaleX(0);
    transition: 500ms;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
  }
  :hover {
    color: #ffd644;
    :after {
      transform: scaleX(1);
    }
  }
  &.active {
    color: white;
    :after {
      content: '';
      height: 4px;
      border-radius: 5px;
      display: block;
      position: relative;
      top: 3px;
      background-color: white;
      transform: scaleX(1);
    }
  }
`;

const GifHubLink = styled.a`
  border: #4c6ef5 solid 4px;
  border-bottom-color: red;
  border-right-color: greenyellow;
  border-left-color: yellow;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: rotate-infinity infinite 30s linear;
  :hover {
    animation: rotate-border infinite 1.5s linear;
  }
  @keyframes rotate-border {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-infinity {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0deg);
    }
  }
`;

const Header = () => (
  <WrapperHeader>
    <Container>
      <HomeLink to="/">
        <img src="/favicon.ico" alt="logo" />
      </HomeLink>
      <NavBar>
        <Nav to="/">home</Nav>
        <Nav to="/projects">projects</Nav>
        <Nav to="/blog">blog</Nav>
      </NavBar>
      <GifHubLink href="https://github.com/hendridg">
        <img
          style={{
            display: 'inline',
            userSelect: 'none',
          }}
          src="./assets/github.svg"
          alt="github icon"
        />
      </GifHubLink>
    </Container>
  </WrapperHeader>
);

export default Header;
