
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { SubTitle } from "@styles/common";

const Anim = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const ProjectsTitle = styled(SubTitle)`
  animation: ${Anim} 700ms ease-in-out forwards;
  margin-bottom: 4rem;
`;
