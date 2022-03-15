import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import TitleSection from './TitleSection';

const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  gap: 2rem;
  @media (min-width: 400px) {
    font-size: 1rem;
  }
  @media (min-width: 800px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1020px) {
    font-size: 1.2rem;
  }
`;

const Container = styled.div`
  max-width: 60rem;
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  align-items: center;
  width: 100%;
  gap: 2rem;
  @media (min-width: 620px) {
    flex-direction: row;
  }
`;

const Content = styled.p`
  flex: 1;
  font-size: 1.8em;
  text-align: center;
  @media (min-width: 620px) {
    text-align: left;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  width: 50%;
  min-width: 20rem;

  input,
  textarea {
    padding: 1em;
    border: none;
    border-radius: 2em;
  }

  textarea {
    min-height: 6rem;
  }
`;

const Contact = () => (
  <WrapperContact>
    <TitleSection lineColor="#e67700">Contact me</TitleSection>
    <Container>
      <Content>
        I&#39;m
        {' '}
        <span style={{ color: '#e67700' }}>always</span>
        {' '}
        interested in
        hearing about new projects, so if you&#39;d like to chat please
        {' '}
        <span style={{ color: '#e67700' }}>get in touch.</span>
      </Content>
      <Form action="https://formspree.io/f/mrgjzokg" method="post">
        <input type="text" name="name" required placeholder="Full name" />
        <input type="email" name="email" required placeholder="Email address" />
        <textarea name="text_area" required placeholder="Enter text here..." />
        <Button type="submit">Get in touch</Button>
      </Form>
    </Container>
  </WrapperContact>
);

export default Contact;
