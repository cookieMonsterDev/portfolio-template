import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { PrimaryButton } from "@styles/common";
import type { ButtonProps } from "@mui/material";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListContainer = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1.5rem;
`;

const ApperAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  90% {
    opacity: 1;
    transform: translateY(-2%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ListButton = styled(PrimaryButton, {
  shouldForwardProp: (propName) => propName !== "isBase" && propName !== "inView",
})<{ isBase: boolean; inView: boolean }>`
  opacity: 0;

  ${({ inView }) =>
    inView &&
    css`
      opacity: 1;
      animation: ${ApperAnim} 700ms ease-out;
    `}

  ${({ isBase }) =>
    isBase &&
    css`
      margin-top: 3rem;
    `}
`;

export const TheLink = styled(Link)`
  margin: 2rem;
`;
