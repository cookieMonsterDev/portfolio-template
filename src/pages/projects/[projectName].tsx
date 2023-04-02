import { GetStaticPropsContext } from 'next'
import React from 'react'

const Project = ({ project }: { project: any }) => {
  console.log(project)

  return (
    <div>Project</div>
  )
}

export const getServerSideProps = async (context: GetStaticPropsContext) => {
  const projectName = context.params?.projectName;
  const data = await fetch(
    `https://api.github.com/repos/cookieMonsterDev/${projectName}`
  ).then((response) => response.json());

  return {
    props: {
      project: data,
    },
  };
}

export default Project