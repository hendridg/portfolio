import React from 'react';
import styled from 'styled-components';

const WrapperHeading = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  max-width: 60rem;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  flex: 1;
  text-align: center;
  font-size: 0.9rem;
  h1 {
    color: #862e9c;
  }
  h2 {
    line-height: 1.5em;
    opacity: 0.6;
  }
  @media (min-width: 600px) {
    width: 90%;
    text-align: left;
    font-size: 1rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  img {
    flex: 1;
    width: 8em;
    height: 8em;
  }
  @media (min-width: 600px) {
    width: 48%;
    flex-wrap: wrap;
    gap: 1em;
  }
`;

const Heading = () => (
  <WrapperHeading>
    <Container>
      <Content>
        <h1>Hendrid G.</h1>
        <h2 style={{ fontFamily: 'Confortaa', color: '#e67700', opacity: '1' }}>
          I’m a software developer
        </h2>
        <h2>
          I can help you build a product, feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don’t hestiate to contact me.
        </h2>
      </Content>
      <ImgContainer>
        <img src="/assets/logo.svg" alt="logo react" />
        <img src="/assets/apollo-graphql-1.svg" alt="logo apollo" />
        <img
          style={{ width: '3em', height: '3em' }}
          src="/assets/redux-logo-svgrepo-com.svg"
          alt="logo redux"
        />
        <img src="/assets/tailwind-css-wordmark.svg" alt="logo tailwind" />
      </ImgContainer>
    </Container>
  </WrapperHeading>
);
export default Heading;
