import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import Button from 'comps/Button';
import { NonceProvider } from 'react-select';


const Container = styled.div`
height: 232px;
width:100%;
max-width: 394px;
border-radius: 5px;
display:flex;
flex-direction:column;
align-items:center;
color:#676767;
background-color: white;
display:none;
${props => props.active === true && css `
    display:flex;  `  }
`;


const IconCircle = styled.div`
width:100%;
height:100%;
max-height: 73px;
max-width: 73px;
background: #F37C75;
border-radius:50px;
position:relative;
top:-35px;
background-image: url("./deleteicon.png");
background-position:center;
background-repeat: no-repeat;
background-size:50%;
`;


const Header = styled.div`
font-size:18px;
font-weight: 700;
margin-top: -20px;
margin-bottom:20px;
`;

const Desc = styled.div`
text-align:center;
width:80%;
margin:10px;
`;

const ButtonDiv = styled.div`
display:flex;
width:90%;
justify-content: space-between;
margin-top:20px;
`;

const Delete = ({active, Cancel, Delete}) => {

    
    return <Container active={active}>
<IconCircle/>
<Header>You are about to delete an item</Header>
<Desc>This will remove the transaction from your list. Are you sure? </Desc>
<ButtonDiv>
    <Button bheight="40px" iconsrc="./cancelicon.png"  label="Cancel" onClick={Cancel}/>
    <Button  bheight="40px" iconsrc="./deleteicon.png" bgcolour="#F37C75" label="Delete" onClick={Delete}/>
</ButtonDiv>
    </Container>
}

Delete.defaultProps = {

}

export default Delete;

