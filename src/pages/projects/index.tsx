import gitHubApi from '@features/axios'
import React from 'react'

const Projects = ({ projects }: { projects: any[] }) => {
  console.log(projects)

  return (
    <div>Test</div>
  )
}

export const getServerSideProps = async () => {
  const user = process.env.API_USERNAME!;
  const { data } = await gitHubApi.get(`users/${user}/repos`);

  return {
    props: {
      projects: data,
    },
  };
}

export default Projects