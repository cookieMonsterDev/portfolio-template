import React from 'react';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { switchContact } from '../../actions/actions';
import CloseButton from './CloseButton';
import ContactFrom from './ContactFrom';

const ContactMe = () => {
  const active = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (active && screenWidth <= 896) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [active]);

  const handleClick = () => {
    dispatch(switchContact());
  };

  return (
    <Container>
      <Title>Wanna Stay in touch ?</Title>
      <Button onClick={handleClick}>Contact Me</Button>
      <p>
        I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <Window isShow={active}>
        <CloseButton close={handleClick} />
        <ContactFrom isShow={active} />
      </Window>
    </Container>
  );
};

export default ContactMe;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 45rem;
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    max-width: 40rem;
    margin: 2rem 0;
    text-align: justify;
    color: #c1cde8;
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Heebo', sans-serif;
  }

  @media only screen and (max-width: 56rem) {
    > h1 {
      font-size: 2rem;
    }
  }
`;

const Button = styled.button`
  width: 10rem;
  height: 5rem;
  color: #0ee3b5;
  border: 0.15rem solid #0ee3b5;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 700;

  &:active {
    background-color: rgba(14, 227, 181, 0.2);
  }
`;

const Window = styled.div`
  width: 10rem;
  height: 5rem;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  opacity: 0;
  transition: all 1000ms;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  visibility: hidden;

  ${(props) =>
    props.isShow &&
    css`
      width: 40rem;
      height: 45rem;
      z-index: 20;
      opacity: 1;
      background-color: #122c59;
      visibility: visible;

      @media only screen and (max-width: 56rem) {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: #112240;
      }
    `}
`;

const Title = styled.h1`
  margin-bottom: 2.5rem;
  text-align: center;
  color: #0ee3b5;
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;

  @media only screen and (max-width: 48em) {
    font-size: 2rem;
  }
`;
