import React from 'react';
import styled from 'styled-components';
import ButtonLink from '../components/ButtonLink';

const WrapperProjects = styled.div`
  margin: 0 auto;
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    font-size: 0.9rem;
  }
  @media (min-width: 800px) {
    font-size: 1rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;

const ProjectsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  justify-content: center;
  align-items: center;
`;

const Project = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60rem;
  padding: 1rem 0.3rem;
  margin: 1rem;
  border-radius: 1rem;
  gap: 0.5rem;
  background-color: #2e3039;
  @media (min-width: 600px) {
    flex-direction: row;
    padding: 2rem;
  }
`;

const Content = styled.div`
  flex: 1.5 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
`;

const ImgContainer = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  height: 20rem;
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;

  img {
    width: 100%;
    min-height: 20rem;
    object-fit: cover;
  }
`;

const TitleProject = styled.h1`
  flex: 1 2;
  padding: 0;
  margin: 0;
`;

const Strong = styled.span`
  color: ${(props) => (props.color ? props.color : 'white')};
  background-color: ${(props) => (props.bg ? props.bg : 'white')};
  padding: 0.1em 0.5em;
  border-radius: 0.5em;
`;

const Description = styled.h3`
  margin: 0;
  padding: 0;
  line-height: 1.5em;
`;

const Projects = () => (
  <WrapperProjects>
    <ProjectsContainer>
      <Project>
        <TitleProject>COVID-19 Statistic</TitleProject>
        <Content>
          <ImgContainer>
            <img src="/assets/cards/screenshot-01.png" alt="COVID-19 logo" />
          </ImgContainer>
          <Description>
            Is a web app using https://covid19tracking.narrativa.com/ API, with
            responsive design you can filter the data by day, and select the
            country to details information, the principal tools was
            {' '}
            <Strong bg="#61dafb" color="#1f1f1f">
              React
            </Strong>
            ,
            {' '}
            <Strong bg="#764abc">Redux</Strong>
            ,
            {' '}
            <Strong bg="#764abc">Redux-Toolkits</Strong>
            ,
            {' '}
            <Strong bg="#e94949" color="#1f1f1f">
              React-Router
            </Strong>
            {' '}
            and
            {' '}
            <Strong bg="whitesmoke" color="#1f1f1f">
              {'< '}
              💅
              {' >'}
              {' '}
              Styled-Components
            </Strong>
            .
          </Description>
          <ButtonsContainer>
            <ButtonLink accent>See Github</ButtonLink>
            <ButtonLink>See in Live</ButtonLink>
          </ButtonsContainer>
        </Content>
      </Project>
    </ProjectsContainer>
  </WrapperProjects>
);

export default Projects;
