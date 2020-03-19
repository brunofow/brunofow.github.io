import React from 'react';

import Header from '../../components/Header';
import Project from '../../components/Project';
import Techs from '../../components/Techs';

import { Container, SubTitle, Presentation, NavigationButton } from '../../globalStyles';
import { Projects, ProjectLink, TopicTitle, DownloadContainer, DownloadButton } from './styles';

import hashtagramFood from '../../assets/mockup-home-food.png';
import hashtagramSports from '../../assets/mockup-home-sports.png';
import hashtagramTags from '../../assets/mockup-hashtags.png';
import hashtagramTagsCopy from '../../assets/mockup-hashtags-copied.png';

import expoLogo from '../../assets/expo-logo.png';
import nodeLogo from '../../assets/node-logo.png';
import reactLogo from '../../assets/react-logo.png';
import tsLogo from '../../assets/ts-logo.png';


export default function Portfolio({ history }) {

  const hashtagramMockups = [
    {
      mockup: hashtagramFood,
      title: 'Tela Inicial'
    },
    {
      mockup: hashtagramSports,
      title: 'Tela Inicial'
    },
    {
      mockup: hashtagramTags,
      title: 'Copiar Hashtags'
    },
    {
      mockup: hashtagramTagsCopy,
      title: 'Feedback Hashtags Copiadas'
    }
  ];

  const hashtagramTechs = [
    {
      logo: expoLogo
    },
    {
      logo: nodeLogo
    },
    {
      logo: reactLogo
    },
    {
      logo: tsLogo
    }
  ];

  return (
    <>
      <Header history={history} />
      <Container>
        <SubTitle>Portfólio</SubTitle>
        <Presentation>
          Este é o meu portfólio, a maioria das aplicações aqui, foram desenvolvidas em três partes: Back-End(Api), Front-End(Web) e Mobile. <br />
          Eu gostaria muito de um feedback, então se sentir vontade, me mande alguma dica, ou algo do tipo, ficarei muito feliz 😁.
        </Presentation>
        <NavigationButton>Contato</NavigationButton>
        <Projects>
          <ProjectLink href="https://github.com/brunofow/Hashtagram" target="_blank" rel="noopener noreferrer" >
            <SubTitle>Hashtagram</SubTitle>
          </ProjectLink>
            <Project screens={hashtagramMockups} />
          <TopicTitle>Tecnologias Utilizadas</TopicTitle>
          <Techs techs={hashtagramTechs} />
          <TopicTitle>Resumo</TopicTitle>
          <Presentation>
            A idéia deste aplicativo, é facilitar para quem posta com frequência no Instagram, e utiliza Hashtags para aumentar o alcance dos posts! <br />
            Basta escolher uma categoria, e clicar no botão copiar, as hashtags ja vão estar no clipboard 😉. <br />
            <a href="https://github.com/brunofow/hashtagram-api" target="_blank" style={{ color: '#000000'}} rel="noopener noreferrer" >A api foi feita em NodeJs</a> <br />
            E o aplicativo, utilizando React Native, ambos em Typescript. <br />
            <a href="https://hashtagram-admin.netlify.com" target="_blank" style={{color: '#000000'}} rel="noopener noreferrer" >Tem também um site com React.Js</a>, mas este é só para cadastro das Hashtags.
          </Presentation>
          <DownloadContainer>
            Caso queira testar, é só baixar o aplicativo e instalar no seu celular.
            <DownloadButton href="../../apks/Hashtagram.apk" download>Download Android</DownloadButton>
          </DownloadContainer>
        </Projects>
      </Container>
    </>
  );
}
