import React from "react";
import { Container, InfoContainer, Item, List, PhotoContainer, Text } from "./AboutMe.styled";
import { AboutMeProps } from "./AboutMe.types";
import config from "@config";
import { useInView } from "react-intersection-observer";
import { Aperture } from "@components/Aperture";

export const AboutMeComponent: React.FC<AboutMeProps> = ({ skilsList = config.skils }) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    rootMargin: "-20px",
  });

  return (
    <Container ref={ref} inView={inView}>
      <InfoContainer>
        <Text>
          Hello! My name is Mykhailo and I am as you could understood web developer. My path in
          IT started back in 2021 when I decided to try myself as QA Engineer - it turned out
          that just testing to enough for me that is when I decided to challenge development!
        </Text>
        <Text>
          Till this time I tried myself in different projects, with a large sphere of
          influence. This includes commercial marketplaces, healthcare applications, difference
          king of APIs and other
        </Text>
        <Text>Here are a some technologies I’ve been working with recently:</Text>
      </InfoContainer>
      <List>
        {skilsList.map((e) => (
          <Item key={e}>{e}</Item>
        ))}
      </List>
      <PhotoContainer>
        <Aperture image={config.photo_url} />
      </PhotoContainer>
    </Container>
  );
};
