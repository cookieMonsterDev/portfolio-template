import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  text-align: center;
  color: var(--neon);
  font-size: 2rem;
  font-weight: 600;
`;

export const Progress = styled.circle`
  transform-origin: center;
  transform: rotate(180deg);
`;
