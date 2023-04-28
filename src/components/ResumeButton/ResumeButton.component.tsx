import React from "react";
import { ResumeButtonProps } from "./ResumeButton.types";
import { Anim, Link, ResumeButton } from "./ResumeButton.styled";
import config from "@config";

export const ResumeButtonComponent: React.FC<ResumeButtonProps> = ({
  googleFileUrl = config.resume_url,
  animation = Anim,
  delay = 0,
}) => {
  return (
    <Link
      href={googleFileUrl}
      download
      animation={animation}
      delay={delay}
      rel="noreferrer"
      aria-label="Download resume"
    >
      <ResumeButton>Resume</ResumeButton>
    </Link>
  );
};
