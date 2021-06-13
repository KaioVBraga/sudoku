import React from 'react';
import { Container, Content } from './styles';

const TemplateHome: React.FC = props => {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default TemplateHome;
