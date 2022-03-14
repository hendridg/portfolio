import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  :before {
    content: '';
    width: 100%;
    height: 0.1em;
    border-radius: 5px;
    display: block;
    position: relative;
    bottom: 3rem;
    background-color: white;
    color: white;
  }
`;

const TitleSection = ({ children }) => <Title>{children}</Title>;

TitleSection.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TitleSection;
