import React from 'react';

import { Container } from './styles';

export default function Techs({ techs }) {

  return (
    <Container>
      {techs.map(tech => (
        <img alt="Tecnologia utilizada" src={tech.logo} style={{ width: 60, height: 60, resizeMode: 'contain'}} />
      ))}
    </Container>
  );
}
