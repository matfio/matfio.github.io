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
    <Page className='min-h-50v lg:mx-32 mx-8 mb-8'>
      <h1 data-content='Projects' className='my-8'>
        Projects
      </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 md:gap-8 gap-4'>
        {elements}
      </div>
    </Page>
  );
};

export default Projects;
