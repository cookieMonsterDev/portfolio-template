import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Main = styled.main`
  min-height: 100vh;
  padding: 0 20vw;

  @media only screen and (max-width: 70rem) {
    padding: 0 3rem;
  }

  @media only screen and (max-width: 28rem) {
    padding: 0 1rem;
  }
`;

export const FirstSection = styled.section`
  min-height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const Section = styled.section`
  padding: 6rem 0 0 0;
`;

export const NeonButton = styled(Button)`
  color: var(--neon);
  border: 0.1rem solid var(--neon);

  &:hover {
    background: var(--neon-light);
    border: 0.1rem solid var(--neon);
  }
`;

export const PrimaryButton = styled(Button)`
  text-decoration: none;
  color: var(--primary);
  border: 0.1rem solid var(--primary);
  padding: 6px 2rem;
  
  &:hover {
    background: var(--primary-light);
    border: 0.1rem solid var(--primary);
  }
`;

export const SubTitle = styled.h2`
  margin: 1rem 0 2rem 0;
  font-size: 2.5rem;
  font-family: Heebo, sans-serif;
  color: var(--primary);
`;
