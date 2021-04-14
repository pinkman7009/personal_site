import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  padding: 20px;
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroContent = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  .title {
    font-family: 'Sofia', sans-serif;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 2rem;
  }
`;

export const HeroImage = styled.div`
  width: 50%;
  height: 100%;
  .hero-img {
    display: block;
    margin: 2rem auto;
    height: 70%;
    width: 70%;
  }
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
  margin-top: 5rem;
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
