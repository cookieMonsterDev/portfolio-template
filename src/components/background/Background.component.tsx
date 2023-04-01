import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import config from "./tsparticles.config";
import MyBackground from "./Background.styled";
import type { Engine } from "tsparticles-engine";
import type { BackgroundProps } from "./Background.types";


export const BackgroundComponent: React.FC<BackgroundProps> = ({ options }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return <MyBackground init={particlesInit} options={{ ...config, ...options }}/>;
};
