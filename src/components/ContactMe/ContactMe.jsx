import React from 'react';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { switchContact } from '../../actions/actions';

const ContactMe = () => {
  const active = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (active && screenWidth <= 768) {
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
      <Button onClick={handleClick}>Test window</Button>
      <Window isShow={active}>
        <Box1 onClick={handleClick} />
        <Box1 />
        <Box1 />
      </Window>
    </Container>
  );
};

export default ContactMe;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  width: 10rem;
  height: 5rem;

  background-color: white;
  color: black;

  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  z-index: 10;
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

  ${(props) =>
    props.isShow &&
    css`
      width: 40rem;
      height: 45rem;
      z-index: 20;
      opacity: 1;
      background-color: #122c59;

      @media only screen and (max-width: 48em) {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: #112240;
        background-color: red;
      }
    `}
`;

const Box1 = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: green;
  border: 2px solid black;
`;
