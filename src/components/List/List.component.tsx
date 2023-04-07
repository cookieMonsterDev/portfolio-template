import { useState } from "react";
import { Container } from "./List.styled";
import { ListProps } from "./List.types";
import { PrimaryButton } from "@styles/common";
import Link from "next/link";

export const ListComponent = <T extends unknown>({
  list,
  buttonType = "link",
}: ListProps<T>): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      {list.slice(0, 6).map((e: any) => (
        <div key={e.name}>{e.name}</div>
      ))}
      {show && list.slice(6).map((e: any) => <div key={e.name}>{e.name}</div>)}
      {buttonType === "link" ? (
        <Link href="/projects">
          <PrimaryButton>Show more</PrimaryButton>
        </Link>
      ) : (
        <PrimaryButton onClick={() => setShow((prev) => !prev)}>
          {show ? "Show less" : "Show more"}
        </PrimaryButton>
      )}
    </Container>
  );
};
