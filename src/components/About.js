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
    line-height: 1.5em;
  }
`;

const Strong = styled.span`
  color: ${(props) => (props.color ? props.color : 'white')};
  background-color: ${(props) => (props.bg ? props.bg : 'white')};
  padding: 0.1em 0.5em;
  border-radius: 0.5em;
`;

const About = () => (
  <WrapperAbout>
    <TitleSection lineColor="yellow">About me</TitleSection>
    <Container>
      <h2>
        Hi! ✋, my name is Hendrid, I’m a 💻 Full-Stack software engineer 💻
        with a passion for problem-solving who specializes in using
        {' '}
        <Strong bg="#61dafb" color="#1f1f1f">
          React
        </Strong>
        ,
        {' '}
        <Strong bg="#efd81d" color="#1f1f1f">
          Javascript
        </Strong>
        ,
        {' '}
        <Strong bg="#764abc">Redux</Strong>
        ,
        {' '}
        <Strong bg="#3f0fab">ApolloGraphQL</Strong>
        , HTML, CSS. I can help you
        build a product, feature or website Look through some of my work and
        experience! If you like what you see and have a project you need coded,
        don’t hestiate to contact me.
      </h2>
      <ButtonLink linkTo="/cv-hendrid-gonzalez.pdf" accent>
        Get my Resume
      </ButtonLink>
    </Container>
  </WrapperAbout>
);

export default About;
