import React from 'react';
import { Container } from './styles';

interface ButtonProps {
  onClick?: any;
}

const Button: React.FC<ButtonProps> = props => {
  return <Container onClick={props.onClick}>{props.children}</Container>;
};

export default Button;
