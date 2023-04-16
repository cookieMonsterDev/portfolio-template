import Link from "next/link";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

export const Container = styled.header<{ show: boolean }>`
  position: fixed;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: var(--secondary);
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  transition: all 700ms;

  a {
    text-decoration: none;
  }

  ${({ show }) =>
    !show &&
    css`
      transform: translateY(-100%);
    `}

  @media only screen and (max-width: 28rem) {
    height: 4rem;
  }
`;

export const LogoContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;

  @media only screen and (max-width: 28rem) {
    padding-left: 1rem;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 4rem;
  gap: 2rem;

  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
    height: auto;
  }

  @media only screen and (max-width: 70rem) {
    display: none;
    visibility: hidden;
  }
`;

const Anim = keyframes`
  from {
    transform: translateY(-300%)
  }
  to {
    transform: translateY(0)
  }
`;

export const TabLink = styled(Link)<{ delay: number }>`
  height: 2rem;
  position: relative;
  overflow: hidden;
  color: var(--primary);
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  transform: translateY(-300%);
  animation: ${Anim} 500ms ease-out forwards;
  animation-delay: ${({ delay }) => `${150 * delay}ms`};
  transition: all 300ms ease 0s;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 0.2rem;
    width: 100%;
    background: var(--neon);
    transform: translateX(-100%);
    transition: all 300ms ease 0s;
  }

  &:hover {
    color: var(--neon);

    &::before {
      transform: translateX(0);
    }
  }
`;

export const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

export const Menu = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 2rem 2rem 2rem;
  gap: 2rem;
  right: 0;
  height: 100vh;
  width: 70vw;
  background-color: rgb(17, 34, 64);
  animation: ${MenuAnimation} 700ms ease-in-out;

  @media only screen and (max-width: 28rem) {
    width: 80vw;
  }
`;

export const MenuLink = styled(Link)`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--neon);
`;
