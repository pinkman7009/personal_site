import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 150px;
  margin-top: 4rem;
`;

export const SkillsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TechList = styled.div`
  min-height: 550px;
  width: 30%;
  background: #fff;
  margin: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Heading = styled.div`
  height: 30%;
  background: #b0fad6;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tech = styled.div`
  height: 70%;
  background: #fff;
  padding: 1.5rem;
`;
