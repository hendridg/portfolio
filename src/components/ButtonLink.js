import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.a`
  font-family: 'Poppins', sans-serif;
  background-color: ${(props) => (props.accent ? 'greenyellow' : '#228be6')};
  color: #1f1f1f;
  text-decoration: none;
  font-size: 0.8em;
  padding: 1.5em 3em;
  border-radius: 2em;
  border: none;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: box-shadow ease-in-out 300ms, opacity ease-in-out 300ms;
  :hover {
    opacity: 0.9;
    box-shadow: 0px 0px 0px 3px #1f1f1f,
      0px 0px 0px 5px ${(props) => (props.accent ? 'greenyellow' : '#228be6')};
  }
`;

const ButtonLink = ({ children, accent, linkTo }) => (
  <Btn href={linkTo} accent={accent}>
    {children}
  </Btn>
);

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  accent: PropTypes.bool,
};

ButtonLink.defaultProps = {
  accent: false,
};

export default ButtonLink;
