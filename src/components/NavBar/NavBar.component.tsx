import React, { useEffect, useState } from "react";
import { Container, Navbar, TabLink, Logo } from "./NavBar.styles";
import { NavBarProps } from "./NavBar.types";
import Link from "next/link";

const isBrowser = () => typeof window !== "undefined";

export const NavBarComponent: React.FC<NavBarProps> = ({ tabs, logo }) => {
  let prevScrollpos: number;
  if (isBrowser()) prevScrollpos = window.screenY;
  const [show, setShow] = useState(true);

  const handleNavBar = () => {
    const currentScrollPos = window.scrollY;
    prevScrollpos < currentScrollPos ? setShow(false) : setShow(true);
    prevScrollpos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavBar);

    return () => {
      window.removeEventListener("scroll", handleNavBar);
    };
  });

  return (
    <Container show={show}>
      <Link href="/">
        <Logo>{logo}</Logo>
      </Link>
      <Navbar>
        {tabs.map(({ name, href, content, ...rest }, i) => (
          <TabLink key={name} href={href} item={Boolean(content)} delay={i} {...rest}>
            {content || name}
          </TabLink>
        ))}
      </Navbar>
    </Container>
  );
};
