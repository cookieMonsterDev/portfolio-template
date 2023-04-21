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
          <Logo>
            {logo || (
              <svg
                id="logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -5 210 210"
                version="1.1"
                width="100"
                height="100"
              >
                <polygon
                  className="hex"
                  points="52,16.8615612366939 148,16.8615612366939 196,100 148,183.138438763306 52,183.138438763306 4,100"
                  strokeWidth={10}
                ></polygon>
                <path
                  id="text"
                  transform="translate(58, 55)"
                  d="M 11.7 91 L 0 91 L 0 0 L 17.29 0 L 42.51 57.59 L 67.34 0 L 85.02 0 L 85.02 91 L 72.67 91 L 72.67 15.73 L 48.36 70.46 L 36.14 70.46 L 11.7 15.73 L 11.7 91 Z"
                ></path>
              </svg>
            )}
          </Logo>
        </Link>
      </LogoContainer>
      <Navbar>
        {tabs.map(({ name, content, ...rest }, i) => (
          <TabLink key={name} delay={i} {...rest}>
            {content || name}
          </TabLink>
        ))}
      </Navbar>
      <BurgerButton
        onChange={() => setMenu((prev) => !prev)}
        checked={menu}
        ariaControls="menu"
      />
      <Overlay blur={true} hidden={!menu}>
        <Menu id="menu">
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
