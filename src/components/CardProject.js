import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

const WrapperCardProject = styled.div`
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60rem;
  padding: 1rem 0.3rem;
  margin: 1rem;
  border-radius: 1rem;
  gap: 1rem;
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
  @media (min-width: 600px) {
    order: 1;
  }
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

const TitleProject = styled.h2`
  color: greenyellow;
  text-align: center;
  flex: 1 2;
  padding: 0;
  margin: 0;

  @media (min-width: 600px) {
    text-align: ${(props) => (props.left ? 'left' : 'right')};
    order: ${(props) => (props.left ? '2' : '1')};
  }
`;

const Description = styled.h3`
  margin: 0;
  padding: 0;
  line-height: 1.5em;
`;

const CardProject = (props) => {
  const {
    leftRender,
    title,
    flick,
    alt,
    description,
    urlLinkGitHub,
    urlLinkLive,
  } = props;
  return (
    <WrapperCardProject>
      <TitleProject left={leftRender}>{title}</TitleProject>
      <Content>
        <ImgContainer>
          <img src={flick} alt={alt} />
        </ImgContainer>
        <Description>{description}</Description>
        <ButtonsContainer>
          <ButtonLink accent linkTo={urlLinkGitHub}>
            See Sources
          </ButtonLink>
          <ButtonLink linkTo={urlLinkLive}>See Live</ButtonLink>
        </ButtonsContainer>
      </Content>
    </WrapperCardProject>
  );
};

CardProject.propTypes = {
  leftRender: PropTypes.bool,
  title: PropTypes.string.isRequired,
  flick: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlLinkGitHub: PropTypes.string.isRequired,
  urlLinkLive: PropTypes.string.isRequired,
};

CardProject.defaultProps = {
  leftRender: false,
};

export default CardProject;
