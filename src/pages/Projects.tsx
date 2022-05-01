import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';

interface GitProject {
  name: string;
  description: string;
  html_url: string;
}

async function getProjects<T>(user: string): Promise<T> {
  const res = await fetch(`https://api.github.com/users/${user}/repos`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return (await res.json()) as Promise<T>;
}

const Projects = (): JSX.Element => {
  const [data, setData] = useState<GitProject[]>();

  useEffect(() => {
    getProjects<GitProject[]>('matfio').then(setData);
  }, []);

  if (!data) {
    return <Loader />;
  }

  const elements = data.map((entry, i) => (
    <Card
      key={i}
      title={entry.name}
      description={entry.description}
      link={entry.html_url}
    />
  ));

  return (
    <div className='m-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
      {elements}
    </div>
  );
};

export default Projects;