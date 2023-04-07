import React from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";

const Cont = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Anim = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  90% {
    opacity: 1;
    transform: translateX(5%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const Box = styled.div<{ inView: boolean }>`
  width: 20rem;
  height: 20rem;
  background: yellow;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 1000ms;

  ${({ inView }) =>
    inView &&
    css`
      animation: ${Anim} 700ms ease-out forwards;
    `}
`;

const Test2 = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Cont id="about">
      <Box ref={ref} inView={inView}/>
    </Cont>
  );
};

export default Test2;
