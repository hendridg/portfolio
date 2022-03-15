import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 12rem;
  animation: bloop ease-out 500ms;
  translate: scale;
  @keyframes bloop {
    0% {
      transform: scale(0.3);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  animation: showup ease-in 500ms;
  @keyframes showup {
    0% {
      margin-right: 70%;
    }
    100% {
      margin-right: 0;
    }
  }
`;

const UnderConstruction = () => (
  <Container>
    <Title>under construction</Title>
    <Img src="/men_at_work.svg" alt="men at work" />
  </Container>
);

export default UnderConstruction;
