import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import styled from 'styled-components';

const Social = () => {
  return (
    <Container>
      <List>
        <ListItem> 
          <GitHubIcon />
        </ListItem>
        <ListItem>
          <LinkedInIcon />
        </ListItem>
        <ListItem>
          <AlternateEmailOutlinedIcon />
        </ListItem>
        <ListItem>
          <LocalPhoneOutlinedIcon></LocalPhoneOutlinedIcon>
        </ListItem>
      </List>
      <Stripe />
    </Container>
  );
};

export default Social;

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
  margin: 0.2rem 0;
  transition: all 700ms;

  > svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: #8fa3cd;
  }

 > svg:hover {
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