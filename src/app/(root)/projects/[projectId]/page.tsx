import axios from 'axios';
import { cookies, headers } from 'next/headers';

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

const ProjectPage = async ({ params }: ProjectPageProps) => {

  const h = { cookie: cookies().toString() };
  
  const baseURL =
    process.env.NODE_ENV === "production"
      ? `https://${headers().get("Host")}`
      : process.env.NEXT_PUBLIC_SITE_URL;

  const { data: project } = await axios.get(`${baseURL}/api/projects/${params.projectId}`, {
    headers: h,
  });



  return (
    <div>
      {JSON.stringify(project)}
    </div>
  )
}

export default ProjectPage