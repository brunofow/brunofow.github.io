import styled from 'styled-components';

const windowWidth = window.innerWidth;

const maxWidth = windowWidth - windowWidth * 0.1;

export const Container = styled.div`
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1245px) {
    flex-wrap: nowrap;
    max-width: ${maxWidth}px;
    
  }
`;


export const SubTitle = styled.h2`
  font-size: 34px;
  color: #000;
`

export const Presentation = styled.p`
  font-size: 18px;
  line-height: 20px;
  
`

export const NavigationButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  width: 150px;
  height: 36px;
  color: #000;
  border-radius: 6px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    background-color: #000;
    color: #fff;
  }
`