import React from 'react';
import styled from 'styled-components';
import projectsList from '../../static/projectsData';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <Container>
      <Title>
        My projects
      </Title>
      <List>
        {projectsList.map((item, index) => {
          return (
            <ListItem key={index}>
              <Project>
                <LinkSection>
                  <div>
                    <FolderOutlinedIcon />
                  </div>
                  <a href={item.prjectLink}>
                    <GitHubIcon />
                  </a>
                </LinkSection>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <TagsSection>
                  {item.tags.map((i, j) => {
                    return <Tag key={j}>{i}</Tag>;
                  })}
                </TagsSection>
              </Project>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default Projects;

const Container = styled.section`
  box-sizing: border-box;
  flex-direction: column;
  padding: 5rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 2.5rem;
  text-align: center;
  color: #0ee3b5;
  font-size: 3rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;

  @media only screen and (max-width: 48em) {
    font-size: 2rem;
  }
`

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

const ListItem = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem 1rem 2rem 1rem;
  background-color: #122c59;
  border: 2px solid #122c59;
  transition: all 700ms;

  > h1 {
    color: #c1cde8;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Heebo', sans-serif;
    transition: all 700ms;
  }

  > p {
    margin-top: 0.5rem;
    text-align: left;
    color: #819ad1;
    font-size: 0.9rem;
    font-weight: 300;
    font-family: 'Heebo', sans-serif;
  }

  &:hover {
    border: 2px solid #0ee3b5;
    transform: translateY(-10px);

    > h1 {
      color: #e7e6e1;
    }

    > section > span {
      color: #0ee3b5;
    }
  }
`;

const TagsSection = styled.section`
  position: absolute;
  bottom: 2rem;
  display: flex;
`;

const Tag = styled.span`
  margin-right: 1rem;
  color: #8892b0;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
  transition: all 700ms;
`;

const LinkSection = styled.section`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;

  > div {
    color: #0ee3b5;

    > svg {
      width: 2rem;
      height: 2rem;
    }
  }

  > a {
    color: #8fa3cd;
  }
`;
