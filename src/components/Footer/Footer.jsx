import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import styled from 'styled-components';
import externalLinks from '../../static/externalLinks';

const Footer = () => {
  return (
    <Conteiner>
      <Socials>
        <SocialItem>
          <a
            href={externalLinks.gitHub.href}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </SocialItem>
        <SocialItem>
          <a
            href={externalLinks.gitHub.href}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </SocialItem>
        <SocialItem>
          <a href='mailto: mykhailo.toporkov@gmail.com'>
          <AlternateEmailOutlinedIcon />
          </a>
        </SocialItem>
        <SocialItem>
          <a href='tel: +380 096 050 33 48'>
            <LocalPhoneOutlinedIcon />
          </a>
        </SocialItem>
      </Socials>
      <Info>Designed and Build by Mykhailo Toporkov</Info>
    </Conteiner>
  );
};

export default Footer;

const Conteiner = styled.div`
  width: 100%;
  background-color: #0a192f;
  display: flex;
  box-sizing: border-box;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  color: white;

  @media only screen and (max-width: 48em) {
  }
`;

const Socials = styled.div`
  width: 100%;
  display: none;
  justify-content: space-around;
  margin-bottom: 2rem;

  @media only screen and (max-width: 48em)  {
    display: flex;
    margin-bottom: 1rem;
  }
`;

const SocialItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  svg {
    width: 2rem;
    height: 2rem;
    fill: #8fa3cd;
  }
`;

const Info = styled.section`
  margin: 2rem 0;
  text-align: center;
  color: #8fa3cd;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;

  @media only screen and (max-width: 48em)  {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;
