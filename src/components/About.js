import React from 'react';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';
import TitleSection from './TitleSection';

const WrapperAbout = styled.div`
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  align-self: center;
  h2 {
    text-align: center;
    opacity: 0.8;
  }
`;

const About = () => (
  <WrapperAbout>
    <TitleSection>About me</TitleSection>
    <Container>
      <h2>
        Hi! ✋, my name is Hendrid, I’m a 💻 Full-Stack software engineer 💻
        with a passion for problem-solving who specializes in using Javascript,
        React, Redux, Apollo GraphQL, HTML, CSS. I can help you build a product,
        feature or website Look through some of my work and experience! If you
        like what you see and have a project you need coded, don’t hestiate to
        contact me.
      </h2>
      <ButtonLink linkTo="/cv-hendrid-gonzalez.pdf" accent>
        Get my Resume
      </ButtonLink>
    </Container>
  </WrapperAbout>
);

export default About;
