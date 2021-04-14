import React from 'react';
import {
  ProjectWrapper,
  ProjectsContent,
  ProjectItem,
} from '../elements/ProjectElements';
import { H2 } from '../elements/TypographyElements';

const Projects = () => {
  return (
    <ProjectWrapper id='projects'>
      <H2 size='large' textAlign='center' color='primary' smCenter='true'>
        My Projects
      </H2>
      <ProjectsContent>
        <ProjectItem bg='#D77F7F'>Bookify Online Book Library</ProjectItem>
        <ProjectItem bg='#20B197'>Pet Store API</ProjectItem>
        <ProjectItem bg='#DEDF98'>Movie Nominations</ProjectItem>
        <ProjectItem bg='#CA9ECB'>Github Finder</ProjectItem>
        <ProjectItem bg='#52A1EA'>WeatherLand Weather Search</ProjectItem>
        <ProjectItem bg='#ADDBA6'>Animeaza Anime Blog</ProjectItem>
      </ProjectsContent>
    </ProjectWrapper>
  );
};

export default Projects;
