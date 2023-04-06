import React from "react";
import { Container } from "./Overlay.styled";
import { OverlayProps } from "./Overlay.types";

export const OverlayComponent: React.FC<OverlayProps> = ({
  overlayColor = "transparent",
  blur = false,
  children,
}) => {
  return (
    <Container overlayColor={overlayColor} blur={blur}>
      {children}
    </Container>
  );
};
