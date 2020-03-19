import React from 'react';

import Header from '../../components/Header';

import { Container, SubTitle, Presentation, NavigationButton } from '../../globalStyles';


export default function Home({ history }) {
  return (
    <>
      <Header history={history} />
      <Container>
        <SubTitle>
          Sobre Mim
        </SubTitle>
        <Presentation>
          Olá, meu nome é Bruno, e sou um desenvolvedor em busca do "Full Stack", utilizando tecnlogias que trabalham bem juntas para facilitar o aprendizado! <br />
          Para a criação deste site, utilizei React.Js, pois é uma das tecnologias que mais tenho focado atualmente. <br />
          Utilizo também outras ferramentas, e detalhei todas no meu Portfólio.
        </Presentation>
        <NavigationButton onClick={() => history.push('/portfolio')} >
          Portfólio
        </NavigationButton>
      </Container>
    </>
  );
}
