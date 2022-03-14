import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

const WrapperCard = styled.div`
  display: flex;
  width: 18rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const ImgContainer = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  height: 20rem;
  /* max-width: 1rem; */
  border-radius: 0.2em;
  img {
    width: 100%;
    min-height: 25rem;
    object-fit: cover;
  }
`;

const TitleCard = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const GroupLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const LabelCard = styled.p`
  background-color: #2e3039;
  font-weight: bold;
  font-size: 0.6rem;
  margin: 0;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 0.8rem;
`;

const Card = (props) => {
  const {
    flick, alt, title, url, tools,
  } = props;
  return (
    <WrapperCard>
      <ImgContainer>
        <img src={flick} alt={alt} />
      </ImgContainer>
      <TitleCard>{title}</TitleCard>
      <GroupLabels>
        {tools.map((tool) => (
          <LabelCard key={uuidv4()}>{tool}</LabelCard>
        ))}
      </GroupLabels>
      <ButtonLink linkTo={url}>See Live Demo</ButtonLink>
    </WrapperCard>
  );
};

Card.propTypes = {
  flick: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
