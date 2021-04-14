import styled from 'styled-components';

export const AboutWrapper = styled.div`
  padding-top: 150px;
  min-height: 100vh;
  width: 100%;
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 2rem 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const AboutImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  > * {
    border-radius: 10%;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 1rem;

    > * {
      width: 50%;
      height: 50%;
    }
  }
`;
// 450 380
export const AboutText = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Btn = styled.div`
  background: linear-gradient(
    90deg,
    #1cc8ff -26.68%,
    rgba(3, 234, 178, 0) 186.44%
  );
  border-radius: 50px;
  height: 85px;
  width: 300px;
  padding: 1rem;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  cursor: pointer;
  a {
    font-weight: 500;
  }

  transition: all 0.3s ease;

  :hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 768px) {
    margin: 1rem auto;
    height: 70px;
    width: 250px;
  }
`;
