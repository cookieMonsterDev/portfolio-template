import { Letter } from "@components/Letter";
import { Button, Container, Heading, Info } from "./Welcome.styled";
import Link from "next/link";

export const WelcomeComponent: React.FC = () => {
  const welcome = "Hi,".split("");
  const name = "I’m Mykhailo,".split("");
  const position = "JavaScript engineer".split("");
  const welcomeLength = welcome.length - 1;
  const nameLength = name.length - 1;

  return (
    <Container>
      <Heading aria-label="Hi, I’m  Mykhailo, JavaScript engineer">
        {welcome.map((e, i) =>
          e !== " " ? (
            <Letter key={i} duration={500} delay={50 * i}>
              {e}
            </Letter>
          ) : (
            <span aria-hidden="true" key={i}>
              {" "}
            </span>
          )
        )}
        <br />
        {name.map((e, i) =>
          e !== " " ? (
            <Letter key={i} duration={500} delay={(50 * i) + (500 + (welcomeLength * 50))}>
              {e}
            </Letter>
          ) : (
            <span aria-hidden="true" key={i}>
              {" "}
            </span>
          )
        )}
        <br />
        {position.map((e, i) =>
          e !== " " ? (
            <Letter key={i} duration={500} delay={(50 * i) + (500 + (nameLength * 50))}>
              {e}
            </Letter>
          ) : (
            <span aria-hidden="true" key={i}>
              {" "}
            </span>
          )
        )}
      </Heading>
      <Info>Front-End React Developer / Back-End NodeJS Developer</Info>
      <Link href="#about">
        <Button>About Me</Button>
      </Link>
    </Container>
  );
};
