import React from 'react'

const Projects = ({ projects }: { projects: any[] }) => {
  console.log(projects)

  return (
    <div>Test</div>
  )
}

export const getServerSideProps = async () => {
  const data = await fetch(
    `https://api.github.com/users/cookieMonsterDev/repos`
  ).then((response) => response.json());

  return {
    props: {
      projects: data,
    },
  };
}

export default Projects