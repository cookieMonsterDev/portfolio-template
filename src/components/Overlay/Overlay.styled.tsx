import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.div<{ overlayColor: string; blur: boolean }>`
  position: fixed;
  inset: 0;
  background: ${({ overlayColor }) => overlayColor};

  ${({ blur }) =>
    blur &&
    css`
      backdrop-filter: blur(3px);
    `}
`;
