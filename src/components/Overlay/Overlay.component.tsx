import React from "react";
import { Container } from "./Overlay.styled";
import { OverlayProps } from "./Overlay.types";

export const OverlayComponent: React.FC<OverlayProps> = ({
  overlayColor = "transparent",
  blur = false,
  children,
  hidden
}) => {
  return (
    <Container overlayColor={overlayColor} blur={blur} hidden={hidden}>
      {children}
    </Container>
  );
};
