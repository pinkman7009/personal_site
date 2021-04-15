import styled from 'styled-components';

export const SocialWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 250px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
  font-size: 2rem;
  align-items: center;
  padding: 1rem;
  z-index: 100;
  > * {
    transition: all 0.3s ease;
    cursor: pointer;
  }
  > *:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 70px;
  }
`;
