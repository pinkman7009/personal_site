import styled from 'styled-components';

export const ContactWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-top: 150px;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContactContent = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 3rem 0;
  align-items: center;

  .contact-form {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    justify-content: center;
    align-items: center;
  }

  .contact-form .input-field {
    height: 80px;
    width: 70%;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    margin: 1rem auto;
  }

  .contact-form .text-field {
    height: 200px;
    width: 70%;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1.2rem;
    margin: 1rem auto;
    font-family: 'Poppins', sans-serif;
  }

  .input-field:focus {
    outline: none;
  }
  .text-field:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    .contact-form {
      width: 100%;
      margin: 2rem;
    }
  }
`;

export const ContactImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .contact-img {
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
  margin: 0 auto;
  align-self: flex-start;
  margin-top: 1rem;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  width: 150px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    opacity: 0.7;
  }
  input {
    background: transparent;
    color: #fff;
    font-size: 1.2rem;
    border: none;
  }
  input:focus {
    outline: none;
  }
`;
