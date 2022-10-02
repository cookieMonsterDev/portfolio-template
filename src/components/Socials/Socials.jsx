import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import styled from 'styled-components';
import externalLinks from '../../static/externalLinks';

const ToolTip = (props) => {
  return (
    <Tooltip
      title={props.title}
      placement="left"
      arrow
      TransitionComponent={Zoom}
      enterDelay={props.enterDelay ? props.enterDelay : 500}
      leaveDelay={200}
    >
      {props.children}
    </Tooltip>
  );
};

const Socials = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <a href={externalLinks.gitHub.href} target="_blank" rel="noreferrer">
            <ToolTip title={externalLinks.gitHub.title} enterDelay={800}>
              <GitHubIcon />
            </ToolTip>
          </a>
        </ListItem>
        <ListItem>
          <a
            href={externalLinks.linkedin.href}
            target="_blank"
            rel="noreferrer"
          >
            <ToolTip title={externalLinks.linkedin.title} enterDelay={800}>
              <LinkedInIcon />
            </ToolTip>
          </a>
        </ListItem>
        <ListItem>
          <a href="mailto: mykhailo.toporkov@gmail.com">
            <ToolTip title="mykhailo.toporkov@gmail.com">
              <AlternateEmailOutlinedIcon />
            </ToolTip>
          </a>
        </ListItem>
        <ListItem>
          <a href="tel:+380 096 050 33 48">
            <ToolTip title="+380 096 050 33 48">
              <LocalPhoneOutlinedIcon />
            </ToolTip>
          </a>
        </ListItem>
      </List>
      <Stripe />
    </Container>
  );
};

export default Socials;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

const ListItem = styled.li`
  display: list-item;
  justify-content: center;
  align-items: center;
  margin: 0.2rem 0;
  transition: all 700ms;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: #8fa3cd;
  }

  svg:hover {
    fill: #0ee3b5;
    transition: all 700ms;
  }
`;

const Stripe = styled.div`
  position: relative;
  bottom: 0;
  width: 0.2rem;
  height: 11rem;
  background-color: #8fa3cd;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform: translateY(110%);
    background-color: #0ee3b5;
    transition: all 700ms;
  }

  &:hover::after {
    transform: none;
  }
`;

const Container = styled.div`
  position: relative;
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 998;

  &:hover {
    ${Stripe} {
      &::after {
        transform: none;
      }
    }
  }

  @media only screen and (max-width: 48em) {
    display: none;
  }
`;
