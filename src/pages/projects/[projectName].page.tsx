import gitHubApi from '@features/axios'
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
  const user = process.env.API_USERNAME!;
  const { data } = await gitHubApi.get(`repos/${user}/${projectName}`);

  return {
    props: {
      project: data,
    },
  };
}

export default Project