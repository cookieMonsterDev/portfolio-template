import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import config from "./tsparticles.config";
import MyWallpaper from "./Wallpaper.styled";
import type { Engine } from "tsparticles-engine";
import type { WallpaperProps } from "./Wallpaper.types";

export const WallpaperComponent: React.FC<WallpaperProps> = ({ options }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return <MyWallpaper init={particlesInit} options={{ ...config, ...options }} />;
};
