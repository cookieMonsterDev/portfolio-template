"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <Image
      src={
        theme === "dark"
          ? "/logo_2023_hex_letter_dark.svg"
          : "/logo_2023_hex_letter_light.svg"
      }
      width={40}
      height={40}
      alt="my-logo"
      priority
    />
  );
};
