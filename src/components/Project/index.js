import React from 'react';

import { Container, Mockup, Image, MockupTitle } from './styles';

export default function Project({ screens }) {
  return (
    <Container>
      {screens.map(screen => (
        <Mockup>
          <Image src={screen.mockup} />
          <MockupTitle>{screen.title}</MockupTitle>
        </Mockup>
      ))}
    </Container>
  );
}
