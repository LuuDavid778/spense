import React from 'react';
import styled, {css} from 'styled-components';

const InputBox = styled.div`
display: flex;
flex-direction: column;
`;

const InputLabel = styled.label`
font-family: Roboto;
font-size: 14px;
color: #676767;
`;

const InputCont = styled.input`
min-height: 42px;
min-width: 350px;
margin-top: 4px;
border-radius: 5px;
::placeholder{
    font-family: Roboto;
    font-size: 14px;
    color: #C4C4C4};
border:solid 1px #DDD9D9;
`;

const Input = ({placeholder, text}) => {
  return <InputBox>
  <InputLabel>{text}</InputLabel>
  <InputCont placeholder={placeholder}/>
  </InputBox>
}

Input.defaultProps = {
placeholder: 'Transaction Name',
text: 'Transaction Name'
}

export default Input;