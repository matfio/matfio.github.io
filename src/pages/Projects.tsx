import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

interface GitProject{
  name:string
}

async function getProjects<T>(user: string): Promise<T> {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  
  return await res.json() as Promise<T>;
}

const Projects = ():JSX.Element => {
  const [data, setData] = useState<GitProject[]>();

  useEffect(() => {
    getProjects<GitProject[]>("matfio")
    .then(setData);
  }, []);

  if (!data) {
    return <Loader />;
  }

  const elements = data.map((entry,i) => 
    <Card title={entry.name} />
  )

  return <>
    {elements}
  </>
};

export default Projects;
