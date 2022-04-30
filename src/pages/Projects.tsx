import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Card, CardActionArea, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";

interface GitProject{
  name:string,
  description:string,
  html_url: string
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
    <Grid key={i} item xs sx={{minWidth: '275px'}}>
      <CardActionArea href={entry.html_url} target="_blank">
        <Card variant="outlined">
          <CardContent>
            <h3>{entry.name}</h3>
            <p>{entry.description}</p>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )

  return (
    <div className="projects-page">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {elements}
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
