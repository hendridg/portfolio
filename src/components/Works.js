import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Card from './Card';
import TitleSection from './TitleSection';

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

const recentWorks = [
  {
    flick: '/assets/cards/screenshot-01.png',
    alt: 'covid app',
    title: 'COVID-19 Statistic',
    url: 'https://mystifying-varahamihira-cda443.netlify.app/',
    tools: ['react', 'react-redux', 'react-router', 'styled-components'],
  },
  {
    flick: '/assets/cards/react-screenshot-01.png',
    alt: 'space travelers app',
    title: "🚀 Space Travelers 'HUB",
    url: 'https://upbeat-perlman-1981ee.netlify.app/',
    tools: ['react', 'react-redux', 'react-router', 'styled-components'],
  },
  {
    flick: '/assets/cards/screenshot_3.png',
    alt: 'creative app',
    title: 'Creative Commons Global',
    url: 'https://hendridg.github.io/capstone-module-1/',
    tools: ['responsive', 'html', 'CSS', 'JavaScript'],
  },
];

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
            url={work.url}
            tools={work.tools}
          />
        ))}
      </CardsContainer>
    </Container>
  </WrapperWork>
);

export default Works;
