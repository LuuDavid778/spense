import React from 'react';
import styled from 'styled-components';
import Button from 'comps/Button';


const Container = styled.div`
height: 232px;
width:100%;
max-width: 394px;
background-color:gray;
border-radius: 5px;
display:flex;
flex-direction:column;
align-items:center;
`;

const IconCircle = styled.div`
height: 73px;
width: 73px;
background: #F37C75;
border-radius:50px;
position:relative;
top:-35px;
backgroun
`;
const Icon = styled.img`
`;


const Delete = ({}) => {

    return <Container>
<IconCircle>

</IconCircle>
        
    </Container>
}

Delete.defaultProps = {

}

export default Delete;

