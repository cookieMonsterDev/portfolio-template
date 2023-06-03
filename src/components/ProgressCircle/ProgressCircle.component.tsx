import React from "react";
import { ProgressCircleProps } from "./ProgressCircle.types";
import { Container, Label, Progress } from "./ProgressCircle.styled";

export const ProgressCircleComponent: React.FC<ProgressCircleProps> = ({
  min = 0,
  max,
  current,
  title,
}) => {
  const dashArray = 40 * Math.PI * 2;
  const percentage = (current * 100) / (max - min);
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <Container>
      <svg
        id="progress-circle"
        role="progressbar"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        version="1.1"
        width={150}
        height={150}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="var(--primary-light)"
          strokeWidth={10}
        />
        <Progress
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="var(--neon)"
          strokeWidth={10}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          aria-valuemax={max}
          aria-valuemin={min}
          aria-valuenow={current}
          aria-label={`${title} progress bar`}
        />
        <text
          x={50}
          y={50}
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--neon)"
          aria-valuenow={current}
          aria-label="Current progress bar value "
        >
          {current}
        </text>
      </svg>
      <Label id="progress">{title}</Label>
    </Container>
  );
};
