import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  width: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  @media(min-width: 900px) {
    flex-direction: row;
    height: 400px;
  }
  
`

export const Mockup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MockupTitle = styled.span`
  font-size: 10px;
  color: #6a6a6a;
`

export const Image = styled.img`
  width: 200px;
  height: 350px;
  background-size: contain;
  transition: all 0.3s;

  :hover {
    transform: scale(1.2);
  }
`