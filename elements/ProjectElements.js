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
export const ProjectItemWrapper = styled.div`
  min-height: 350px;
  min-width: 200px;

  :hover > :nth-child(2) {
    display: block;
  }
  :hover > :nth-child(1) {
    display: none;
  }
`;
export const ProjectItem = styled.div`
  min-height: 350px;
  min-width: 200px;
  background: ${(props) => props.bg};
  position: relative;
  /* padding: 1.5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  :hover > * {
    visibility: visible;
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Overlay = styled.div`
  visibility: none;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  z-index: 2;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  transition: opacity 200ms ease-in-out;
`;

export const OverlayButtons = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  .btn {
    display: inline-block;
    padding: 1rem;
    border: 2px solid #fff;
    width: 50%;
    background: rgba(0, 0, 0, 0.2);
    margin: 1rem 0;
  }
`;
