import { CardProps } from "./Card.types";
import { Container, Desc, Links, Title, BackLink, Topics, Topic } from "./Card.styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useInView } from "react-intersection-observer";

export const CardComponent: React.FC<CardProps> = ({ name, description, topics, url }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const firstTree = topics.slice(0, 3);
  const rest = topics.slice(3).length;

  return (
    <Container aria-label="card" ref={ref} inView={inView}>
      <BackLink href={`/projects/${name}`} aria-label="Project page link"/>
      <Links>
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none">
          <title>Folder</title>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <a href={url} rel="noopener noreferrer" target="_blank" aria-label="Link to github repo">
          <GitHubIcon />
        </a>
      </Links>
      <Title title={name}>{name}</Title>
      <Desc>{description}</Desc>
      <Topics>
        {firstTree.map((e) => (
          <Topic key={e}>{e}</Topic>
        ))}
        {rest > 0 && <Topic>{`and ${rest} more`}</Topic>}
      </Topics>
    </Container>
  );
};
