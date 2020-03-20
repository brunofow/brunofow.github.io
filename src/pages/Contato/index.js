import React, { useState } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, SubTitle, Presentation, NavigationButton } from '../../globalStyles';
import { FormContainer, Input, Label, TextArea, Submit, SpinnerContainer, Spinner, Sent } from './styles';

export default function Contato({ history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [ sent, setSent ] = useState(false);
  const [ mailResponse, setMailResponse ] = useState('');

  const from = {
    name,
    email
  }

  const emailBody = `Email enviado por ${email} <br /> ${body}`

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await api.post('/send', {
      from,
      subject,
      email: emailBody
    })

    setMailResponse(response.data.message);
    setLoading(false);
    setSent(true);

    setName('');
    setEmail('');
    setBody('');
    setSubject('');

    setTimeout(() => {
      setSent(false);
    }, 1000)

    
  }

  return (
    <>
      <Header history={history} />
      <Container>
        {loading && <SpinnerContainer>
          <Spinner>Enviando</Spinner>
        </SpinnerContainer>}
        {sent && <SpinnerContainer>
          <Sent>{mailResponse}</Sent>
        </SpinnerContainer>}
        <SubTitle>Contato</SubTitle>
        <Presentation>
          Muito obrigado por tirar um tempo para ver meus trabalhos. Caso queira fazer contato comigo, enviando um feedback ou só bater um papo mesmo, é só preencher o formulário abaixo.
          Vou ficar muito feliz com sua mensagem <span role="img" aria-label="Sorriso" >😄</span>.
        </Presentation>
        <NavigationButton onClick={() => history.push('/portfolio')} >Portfólio</NavigationButton>
        <FormContainer onSubmit={event => handleSubmit(event)} >
          <Label htmlFor="nome" >Nome</Label>
          <Input id="nome" type="text" required value={name} onChange={event => setName(event.target.value)} />
          <Label htmlFor="email" >E-mail</Label>
          <Input id="email" required type="email" value={email} onChange={event => setEmail(event.target.value)} />
          <Label htmlFor="assunto" >Assunto</Label>
          <Input id="assunto" type="text" required value={subject} onChange={event => setSubject(event.target.value)} />
          <Label htmlFor="mensagem" >Mensagem</Label>
          <TextArea id="mensagem" rows="5" required cols="33" value={body} onChange={event => setBody(event.target.value)} />
          <Submit type="submit" value="Enviar" />
        </FormContainer>
      </Container>
    </>
  );
}
