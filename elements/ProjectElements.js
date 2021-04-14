import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  padding-top: 150px;
  min-height: 100vh;
  width: 100%;
  margin-top: 4rem;
`;

export const ProjectsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  height: 100%;
  width: 100%;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectItem = styled.div`
  min-height: 350px;
  min-width: 200px;
  background: ${(props) => props.bg};
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
