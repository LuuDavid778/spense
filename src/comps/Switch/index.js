import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-width:81px;
max-width:81px;
min-height:36px;
max-height:36px;
padding-left:5px;
background: #F2AB69;
border-radius: 35px;
display:flex;
align-items:center;
`

const Circle = styled.div`
min-width:25px;
max-width:28px;
min-height:28px;
max-height:50px;
background: #FFFFFF;
border-radius:50%;
`

const Switch = ({}) => {
    return <Container>
     
        <Circle>

        </Circle>
    
    </Container>
}


export default Switch;