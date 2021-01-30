import React from 'react'
import styled from 'styled-components'
// import Addicon from './addicon.png'

const Container = styled.button`
width:100%;
height: 50px;
max-width: ${props => props.width ? props.width : "158px"};
border-radius: 5px;
background-color: ${props => props.bgcolour ? props.bgcolour : "#698FF2"};
display:flex;
align-items:center; 
border:none;
outline:none;
`;

const Content = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%
height:100%;
`;

const Label = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-family: 'Roboto', sans-serif;
font-weight:500;
color:white;
font-size:20px;
`;

const Icon = styled.img`
 margin-left:20px;
 margin-right:15px;
`;
const Button = ({label, bwidth, bcolour, iconsrc}) => {

    return <Container bgcolour={bcolour} width={bwidth}>
    <Content>
        <Icon src={iconsrc}></Icon>
        <Label>{label}</Label>
    </Content>
</Container>
}

Button.defaultProps = {
label: "Add",
bwidth: null,
bcolour: null,
iconsrc: "./addicon.png"
}

export default Button;

