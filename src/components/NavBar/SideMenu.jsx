import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { switchMenu } from '../../actions/menuActions';

const SideMenu = () => {
  const isOn = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const scrollToSection = (str) => {
    const element = document.getElementById(str);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleClick = (str) => {
    scrollToSection(str);
    dispatch(switchMenu());
    return;
  };

  return (
    <>
      <BlurOverlay isOn={isOn} onClick={() => dispatch(switchMenu())} />
      <MenuOverlay isOn={isOn}>
        <MenuItem
          onClick={() => {
            handleClick('about');
          }}
        >
          About
        </MenuItem>
        <MenuItem onClick={() => handleClick('experience')}>
          Experience
        </MenuItem>
        <MenuItem>Resume</MenuItem>
        <MenuItem onClick={() => handleClick('contact')}>Contact</MenuItem>
        <MenuItem>Dark theme</MenuItem>
      </MenuOverlay>
    </>
  );
};

export default SideMenu;

const MenuOverlay = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  right: 0;
  width: 75%;
  height: 100vh;
  transform: translateX(110%);
  transition: all 700ms;
  z-index: 101;
  visibility: hidden;
  background-color: #112240;

  @media only screen and (max-width: 48em) {
    ${(props) =>
      props.isOn &&
      css`
        visibility: visible;
        transform: none;
        touch-action: none;
      `}
  }
`;

const BlurOverlay = styled.div`
  display: none;
  justify-content: flex-end;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  backdrop-filter: blur(0.3rem);

  ${(props) =>
    props.isOn &&
    css`
      display: flex;
      touch-action: none;
    `}
`;

const MenuItem = styled.button`
  width: 8.5rem;
  height: 2rem;
  margin: 1rem 0;
  color: #0ee3b5;
  border: none;
  background-color: transparent;
  text-align: left;
  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;
