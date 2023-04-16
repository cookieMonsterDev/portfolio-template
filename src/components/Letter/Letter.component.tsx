import { useEffect, useState } from "react";
import { Span } from "./Letter.styled";
import { LetterProps } from "./Letter.types";
import { RubberBand, RubberScale } from "@styles/animations";

export const LetterComponent: React.FC<LetterProps> = ({
  children,
  apperenceAinamtion = RubberScale,
  hoverAinamtion = RubberBand,
  duration = 0,
  delay = duration,
  theColor = "var(--neon)",
  hoverColor = "white",
}) => {
  const [active, setActive] = useState(true);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const activeTimer = setTimeout(() => {
      setActive(false);
    }, duration + delay);

    const hoverTimer = setTimeout(() => {
      setHover(false);
    }, 700);

    return () => {
      clearTimeout(hoverTimer);
      clearTimeout(activeTimer);
    };
  }, [hover, delay, duration]);

  return (
    <Span
      duration={duration}
      delay={delay}
      hoverAinamtion={hoverAinamtion}
      apperenceAinamtion={apperenceAinamtion}
      isActive={active}
      theColor={theColor}
      hoverColor={hoverColor}
      hover={hover}
      onMouseEnter={() => setHover(true)}
      aria-hidden
    >
      {children}
    </Span>
  );
};
