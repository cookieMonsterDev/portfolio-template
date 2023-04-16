import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Navbar,
  TabLink,
  Logo,
  LogoContainer,
  Menu,
  MenuLink,
} from "./NavBar.styled";
import { NavBarProps } from "./NavBar.types";
import Link from "next/link";
import { isBrowser } from "@utils/helpers";
import { BurgerButton } from "@components/BurgerButton";
import { Overlay } from "@components/Overlay";

export const NavBarComponent: React.FC<NavBarProps> = ({ tabs, logo }) => {
  const prevScrollpos = useRef(isBrowser() ? window.screenY : 0);
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(false);

  const handleNavBar = () => {
    const currentScrollPos = window.scrollY;
    prevScrollpos.current < currentScrollPos ? setShow(false) : setShow(true);
    prevScrollpos.current = currentScrollPos;
  };

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";
    window.addEventListener("scroll", handleNavBar);

    return () => {
      window.removeEventListener("scroll", handleNavBar);
    };
  }, [menu]);

  return (
    <Container show={show}>
      <LogoContainer>
        <Link href="/">
          <Logo>{logo}</Logo>
        </Link>
      </LogoContainer>
      <Navbar>
        {tabs.map(({ name, content, ...rest }, i) => (
          <TabLink key={name} delay={i} {...rest}>
            {content || name}
          </TabLink>
        ))}
      </Navbar>
      <BurgerButton onChange={() => setMenu((prev) => !prev)} checked={menu} ariaControls="menu"/>
      <Overlay blur={true} hidden={!menu}>
        <Menu id='menu'>
          {tabs.map(({ name, content, ...rest }) => (
            <MenuLink key={name} {...rest} onClick={() => setMenu(false)}>
              {content || name}
            </MenuLink>
          ))}
        </Menu>
      </Overlay>
    </Container>
  );
};
