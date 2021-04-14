import styled from 'styled-components';

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: ${(props) => (props.scroll === false ? '150px' : '100px')};

  background: ${(props) =>
    props.scroll === false ? 'transparent' : 'rgb(0,0,0,0.5)'};
  transition: all 0.3s ease;
`;
export const Nav = styled.div`
  max-width: 1500px;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    height: 100px;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: #fff;
    font-size: 1.2rem;
    margin: 0 2rem;
    cursor: pointer;

    > * {
      transition: all 0.5s ease;
    }

    > *:hover {
      color: #42ffa4;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  /* top: 15px; */
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#fff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Logo = styled.div`
  /* position: fixed;
  z-index: 20; */
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-left: 2rem;
  background: #42ffa4;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    margin: 0;
  }
`;
