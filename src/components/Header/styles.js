import styled from 'styled-components';

export const Name = styled.h1`
  font-size: 40px;
  color: #fff;
  line-height: 42px;
  text-shadow: 6px 6px 6px #000;
  cursor: pointer;
  margin-top: 30px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const ContactContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

export const Contact = styled.a`
  background-color: ${props => props.background};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
`