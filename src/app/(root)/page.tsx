import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
