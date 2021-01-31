import React from 'react';
import styled from 'styled-components';
import Button from 'comps/Button';


const Container = styled.div`
height: 232px;
width:100%;
max-width: 394px;
border-radius: 5px;
display:flex;
flex-direction:column;
align-items:center;
color:white;
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

const Delete = ({}) => {

    return <Container>
<IconCircle/>
<Header>You are about to delete an item</Header>
<Desc>This will remove the transaction from your list. Are you sure? </Desc>
<ButtonDiv>
    <Button bheight="40px" iconsrc="" label="Cancel"/>
    <Button  bheight="40px" iconsrc="" bgcolour="#F37C75" label="Delete" />
</ButtonDiv>
    </Container>
}

Delete.defaultProps = {

}

export default Delete;

