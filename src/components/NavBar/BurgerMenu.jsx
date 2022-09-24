import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Conteiner onClick={() => setOpen((prev) => !prev)}>
      <Section isOpen={isOpen} />
    </Conteiner>
  );
};

export default BurgerMenu;

const Conteiner = styled.div`
  width: 2.5rem;
  height: 3rem;
  position: relative;
  transition-duration: 1s;
  cursor: pointer;
`;

const Section = styled.span`
  height: 0.2rem;
  width: 2.5rem;
  top: 50%;
  left: 0;
  background-color: #8fa3cd;
  border-radius: 2rem;
  position: absolute;
  transition-duration: 0.25s;
  transition-delay: 0.25s;

  &::before {
    content: '';
    position: absolute;
    top: -0.75rem;
    left: 0;
    height: 0.2rem;
    width: 2.5rem;
    background-color: #8fa3cd;
    border-radius: 2rem;
    transition-duration: 0.25s;
    transition: transform 0.25s, top 0.25s 0.25s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0.75rem;
    left: 0;
    width: 2.5rem;
    height: 0.2rem;
    background-color: #8fa3cd;
    border-radius: 2rem;
    transition-duration: 0.25s;
    transition: transform 0.25s, top 0.25s 0.25s;
  }

  ${(props) =>
    props.isOpen &&
    css`
      transition-duration: 0.1s;
      transition-delay: 0.25s;
      background: transparent;

      &::before {
        transition: top 0.25s, transform 0.25s 0.25s;
        top: 0;
        transform: rotateZ(-45deg);
        background-color: #0ee3b5;
      }

      &::after {
        transition: top 0.4s, transform 0.25s 0.25s;
        top: 0;
        transform: rotateZ(45deg);
        background-color: #0ee3b5;
      }
    `}
`;
