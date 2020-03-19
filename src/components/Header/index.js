import React from 'react';

import { Container, Name, ContactContainer, Contact} from './styles';

import githubLogo from '../../assets/github.png'
import linkedinLogo from '../../assets/linkedin.png'

export default function Header({ history }) {
  return (
    <Container>
        <Name onClick={() => history.push('/')} >Bruno Campos</Name>
        <ContactContainer>
          <Contact href="https://github.com/brunofow">
            <img alt="github" src={githubLogo} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
          </Contact>
          <Contact background="#0072b1" href="https://linkedin.com/in/brunofow" >
            <img alt="linkedin" src={linkedinLogo} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
          </Contact>
        </ContactContainer>
      </Container>
  );
}