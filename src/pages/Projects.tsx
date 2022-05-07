import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Page from '../components/Page';

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
    <Page className='mr-32 ml-32'>
      <h1>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {elements}
      </div>
    </Page>
  );
};

export default Projects;
