import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import recentWorks from '../recentWorks';
import CardProject from '../components/CardProject';

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
  gap: 2rem;
`;

const Projects = () => (
  <WrapperProjects>
    <ProjectsContainer>
      {recentWorks.map((project) => (
        <CardProject
          key={uuidv4()}
          leftRender={project.leftRender}
          title={project.title}
          flick={project.flick}
          alt={project.alt}
          description={project.description}
          urlLinkGitHub={project.urlLinkGitHub}
          urlLinkLive={project.urlLinkLive}
        />
      ))}
    </ProjectsContainer>
  </WrapperProjects>
);

export default Projects;
