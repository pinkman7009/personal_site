import styled from 'styled-components';

export const P = styled.p`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return '1.5rem';
      case 'medium':
        return '1.125rem';
      case 'small':
        return '1rem';
      case 'xSmall':
        return '0.875rem';
      default:
        return '1.125rem';
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case 'large':
        return '2.5rem';
      case 'medium':
        return '1.8rem';
      case 'small':
        return '1.375rem';
      case 'xSmall':
        return '1.125rem';
      default:
        return '1.4375rem';
    }
  }};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : 'none'};
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};

  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  color: ${(props) => (props.color ? '#42ffa4' : '#fff')};
  @media screen and (max-width: 768px) {
    font-size: ${(props) => {
      switch (props.size) {
        case 'large':
          return '1.2rem';
        case 'medium':
          return '1rem';
        case 'small':
          return '0.85rem';
        case 'xSmall':
          return '0.7rem';
        default:
          return '1rem';
      }
    }};
    text-align: ${(props) => (props.smCenter ? 'center' : 'left')};
  }
`;

export const H1 = styled.h1`
  font-family: ${(props) => (props.font ? props.textAlign : 'Poppins')};
  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return '4.5rem';
      case 'medium':
        return '2.5rem';
      case 'small':
        return '2.125rem';
      case 'xSmall':
        return '1.875rem';
      default:
        return '2rem';
    }
  }};
  line-height: 5rem;

  letter-spacing: 0.25rem;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => {
    switch (props.weight) {
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  color: ${(props) => (props.color ? '#42ffa4' : '#fff')};

  @media screen and (max-width: 768px) {
    font-size: ${(props) => {
      switch (props.size) {
        case 'large':
          return '2.5rem';
        case 'medium':
          return '2rem';
        case 'small':
          return '1.8rem';
        case 'xSmall':
          return '1.675rem';
        default:
          return '1.8rem';
      }
    }};
    text-align: ${(props) => (props.smCenter ? 'center' : 'left')};
  }
`;

export const H2 = styled.h2`
  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return '2.5rem';
      case 'medium':
        return '2rem';
      case 'small':
        return '1.5rem';
      case 'xSmall':
        return '1.4rem';
      default:
        return '1.5rem';
    }
  }};
  line-height: 3.5rem;

  font-weight: ${(props) => {
    switch (props.weight) {
      case 'normal':
        return 400;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }};
  color: ${(props) => (props.color ? '#42ffa4' : '#fff')};

  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  margin: ${(props) => (props.margin ? props.margin : 0)};

  @media screen and (max-width: 768px) {
    font-size: ${(props) => {
      switch (props.size) {
        case 'large':
          return '2rem';
        case 'medium':
          return '1.8rem';
        case 'small':
          return '1.6rem';
        case 'xSmall':
          return '1.475rem';
        default:
          return '1.6rem';
      }
    }};
    text-align: ${(props) => (props.smCenter ? 'center' : 'left')};
  }
`;
