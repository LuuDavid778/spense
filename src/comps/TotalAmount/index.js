import React from 'react';
import styled, {css} from 'styled-components';

const TotalCont = styled.div`
min-height: 170px;
width: 320px;
padding-top: 10px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: start;
border-radius: 5px;
background-color: #FFFFFF;
filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
p{
    font-family: sans-serif;
    font-size: 18px;
    font-style: light;
    color: #676767;
    margin: 2px;
}
`;

const Amount = styled.h2`
font-family: sans-serif;
font-size: 36px;
color: #676767;
margin: 2px;
`;



const TotalAmount = ({amount}) => {
    return<TotalCont>
        <p>Total amount spent:</p>
        <Amount>-CA ${amount}</Amount>
    </TotalCont>
};

TotalAmount.defaultProps = {
    amount: '3700'
};

export default TotalAmount;
