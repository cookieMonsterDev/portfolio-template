import { useState } from "react";
import { ListContainer, Container, ListButton, TheLink } from "./List.styled";
import { ListProps } from "./List.types";
import { Card } from "@components/Card";
import { PrimaryButton } from "@styles/common";

export const ListComponent: React.FC<ListProps> = ({
  list,
  buttonType = "link",
}: ListProps) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <ListContainer role="cardlist">
        {list.slice(0, 6).map(({ name, description, topics, html_url, id }) => (
          <li key={id}>
            <Card
              name={name}
              description={description}
              topics={topics}
              url={html_url}
            />
          </li>
        ))}
        {show &&
          list.slice(6).map(({ name, description, topics, html_url, id }) => (
            <li key={id}>
              <Card
                name={name}
                description={description}
                topics={topics}
                url={html_url}
              />
            </li>
          ))}
      </ListContainer>
      {buttonType === "link" ? (
        <TheLink href="/projects">
          <PrimaryButton>Show more</PrimaryButton>
        </TheLink>
      ) : (
        <ListButton onClick={() => setShow((prev) => !prev)}>
          {show ? "Show less" : "Show more"}
        </ListButton>
      )}
    </Container>
  );
};
