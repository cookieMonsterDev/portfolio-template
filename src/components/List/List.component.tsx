import { useState } from "react";
import { ListContainer, Container, ListButton, TheLink } from "./List.styled";
import { ListProps } from "./List.types";
import { Card } from "@components/Card";
import { useInView } from "react-intersection-observer";
import { InView } from 'react-intersection-observer';

export const ListComponent: React.FC<ListProps> = ({
  list,
  buttonType = "link",
}: ListProps) => {
  const [show, setShow] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Container>
      <ListContainer role="cardlist">
        {list.slice(0, 6).map(({ name, description, topics, html_url, id }) => (
          <li key={id}>
            <Card name={name} description={description} topics={topics} url={html_url} />
          </li>
        ))}
        {show &&
          list.slice(6).map(({ name, description, topics, html_url, id }) => (
            <li key={id}>
              <Card name={name} description={description} topics={topics} url={html_url} />
            </li>
          ))}
      </ListContainer>
      {buttonType === "link" ? (
        <TheLink href="/projects">
          <ListButton ref={ref} isBase={false} inView={inView}>
            Show more
          </ListButton>
        </TheLink>
      ) : (
        <ListButton
          onClick={() => setShow((prev) => !prev)}
          ref={ref}
          isBase={true}
          inView={inView}
        >
          {show ? "Show less" : "Show more"}
        </ListButton>
      )}
    </Container>
  );
};
