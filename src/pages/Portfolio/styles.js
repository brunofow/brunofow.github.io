import styled from 'styled-components';

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`

export const ProjectLink = styled.a`
  
  :hover {
    text-decoration: none;
  }
`

export const TopicTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`

export const DownloadContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content:  center;
  align-items: center;
  margin-top: 20px;
  text-align:center;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`

export const DownloadButton = styled.a`
  text-decoration: none;
  color: #000;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #000;
  width: 150px;
  height: 36px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    margin-top: 10px;
  }

  :hover {
    background-color: #000;
    color: #fff;
  }
`