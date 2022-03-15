import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Card from './Card';
import TitleSection from './TitleSection';
import recentWorks from '../recentWorks';

const WrapperWork = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Works = () => (
  <WrapperWork>
    <Container>
      <TitleSection lineColor="greenyellow">Recent Works</TitleSection>
      <CardsContainer>
        {recentWorks.map((work) => (
          <Card
            key={uuidv4()}
            flick={work.flick}
            alt={work.alt}
            title={work.title}
            url={work.urlLinkLive}
            tools={work.tools}
          />
        ))}
      </CardsContainer>
    </Container>
  </WrapperWork>
);

export default Works;
