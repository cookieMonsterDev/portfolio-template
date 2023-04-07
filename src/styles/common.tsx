import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Main = styled.main`
  min-height: 100vh;
  padding: 8rem 5rem;
`

export const Section = styled.section`
  
`

export const NeonButton = styled(Button)`
  color: var(--neon);
  border: 0.1rem solid var(--neon);

  &:hover {
    background: var(--neon-light);
    border: 0.1rem solid var(--neon);
  }
`;

export const PrimaryButton = styled(Button)`
  color: var(--primary);
  border: 0.1rem solid var(--primary);

  &:hover {
    background: var(--primary-light);
    border: 0.1rem solid var(--primary);
  }
`;