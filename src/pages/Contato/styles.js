import styled from 'styled-components';

const windowWidth = window.innerWidth;

export const FormContainer = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Label = styled.label`
  font-size: 18px;
  color: #cccccc;
`

export const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #000;
  margin-bottom: 10px;
`;

export const Submit = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
  cursor: pointer;
  margin-top: 20px;

  :hover {
    background-color: #000;
    color: #fff;
  }
`

export const TextArea = styled.textarea`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 6px;
`

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  height: 200px;
  width: 80%;
  margin: 0;
  align-self: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`


export const Spinner = styled.span`
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0,5; }
    100% { opacity: 0; }
  }  

  animation: blink .75s linear infinite;
  font-size: 30px;
  color: #fff;
`

export const Sent = styled.span`
  font-size: 30px;
  color: #fff;
`