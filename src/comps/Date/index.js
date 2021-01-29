import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-width:200px;
max-width:356px;
min-height:29px;
max-height:29px;
background-color: #F2AB69;
color: #FFFFFF;
text:${props=>props.text ? props.text : "text"}
`

const Inner = styled.div`
padding:5px;
padding-left:15px;
`



const Date = ({text}) => {
    return <Container>
        <Inner>
        {text}
        </Inner>
    </Container>
}

Date.defaultProps = {
    text:"text",

}

export default Date;