import React from "react";
import { ContactButton, Container, Text } from "./ContactMe.styled";
import { useInView } from "react-intersection-observer";
import config from "@config";

export const ContactMeComponent: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    rootMargin: "-20px",
  });

  return (
    <Container inView={inView} ref={ref}>
      <Text>
        I am waiting for new challenges, my mail is always open for any questions. Just ask
        anything and I will do my best to reach you with answers!
      </Text>
      <a href={`mailto: ${config.socials.email}`} aria-label="Send a message through email">
        <ContactButton>Send message!</ContactButton>
      </a>
    </Container>
  );
};
