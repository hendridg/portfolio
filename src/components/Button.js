import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  font-size: 0.8em;
  padding: 1.5em 3em;
  border-radius: 2em;
  border: none;
  background-color: greenyellow;
  color: #1f1f1f;
  background: ${(props) => (props.accent ? 'greenyellow' : '#228be6')};
  font-weight: 900;
  letter-spacing: 1px;
  cursor: pointer;
  transition: box-shadow ease-in-out 300ms, opacity ease-in-out 300ms;
  :hover {
    opacity: 0.9;
    box-shadow: 0px 0px 0px 3px #1f1f1f,
      0px 0px 0px 5px ${(props) => (props.accent ? 'greenyellow' : '#228be6')};
  }
`;

const Button = ({ children, accent }) => <Btn accent={accent}>{children}</Btn>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  accent: PropTypes.bool,
};

Button.defaultProps = {
  accent: false,
};

export default Button;
