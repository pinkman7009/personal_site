import React from 'react';
import {
  ProjectWrapper,
  ProjectsContent,
  ProjectItem,
  Overlay,
  OverlayButtons,
} from '../elements/ProjectElements';
import { H2, P } from '../elements/TypographyElements';

const Projects = () => {
  return (
    <ProjectWrapper id='projects'>
      <H2 size='large' textAlign='center' color='primary' smCenter='true'>
        My Projects
      </H2>
      <ProjectsContent>
        <ProjectItem bg='#D77F7F'>
          <Overlay>
            <OverlayButtons>
              <a
                href='https://github.com/pinkman7009/Book-Library'
                target='_blank'
                className='btn'
              >
                Github
              </a>
              <a
                href='https://bookify-app-library.herokuapp.com/'
                target='_blank'
                className='btn'
              >
                Live Demo
              </a>
            </OverlayButtons>
          </Overlay>
          Bookify Online Library
        </ProjectItem>
        <ProjectItem bg='#20B197'>
          <Overlay>
            <OverlayButtons>
              <a
                href='https://github.com/pinkman7009/Pet-Store-API'
                target='_blank'
                className='btn'
              >
                Github
              </a>
              <a
                href='https://documenter.getpostman.com/view/11590162/TWDZJbqb'
                target='_blank'
                className='btn'
              >
                Live Demo
              </a>
            </OverlayButtons>
          </Overlay>
          Pet Store API
        </ProjectItem>
        <ProjectItem bg='#DEDF98'>
          <Overlay>
            <OverlayButtons>
              <a
                href='https://github.com/pinkman7009/Movie-Nominations-'
                target='_blank'
                className='btn'
              >
                Github
              </a>
              <a
                href='https://movie-nominations.pinkman7009.vercel.app/'
                target='_blank'
                className='btn'
              >
                Live Demo
              </a>
            </OverlayButtons>
          </Overlay>
          Movie Nominations
        </ProjectItem>
        <ProjectItem bg='#CA9ECB'>
          <Overlay>
            <OverlayButtons>
              <a
                href='https://github.com/pinkman7009/Github-Finder'
                target='_blank'
                className='btn'
              >
                Github
              </a>
              <a
                href='https://githubfinder-pinkman.netlify.app/'
                target='_blank'
                className='btn'
              >
                Live Demo
              </a>
            </OverlayButtons>
          </Overlay>
          Github Finder
        </ProjectItem>
        <ProjectItem bg='#52A1EA'>
          <Overlay>
            <OverlayButtons>
              <a
                href='https://github.com/pinkman7009/WeatherApp'
                target='_blank'
                className='btn'
              >
                Github
              </a>
              <a
                href='https://pinkman7009.github.io/WeatherApp/'
                target='_blank'
                className='btn'
              >
                Live Demo
              </a>
            </OverlayButtons>
          </Overlay>
          WeatherLand Weather Search
        </ProjectItem>
        <ProjectItem bg='#ADDBA6'>
          <Overlay>
            <OverlayButtons>
              <a
                href='https://github.com/pinkman7009/animeaza-blog-final'
                target='_blank'
                className='btn'
              >
                Github
              </a>
              <a
                href='https://animeaza-blog-final.vercel.app/'
                target='_blank'
                className='btn'
              >
                Live Demo
              </a>
            </OverlayButtons>
          </Overlay>
          Animeaza Anime Blog
        </ProjectItem>
      </ProjectsContent>
    </ProjectWrapper>
  );
};

export default Projects;
