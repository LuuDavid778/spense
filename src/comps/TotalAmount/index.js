import React from 'react';
import styled, {css} from 'styled-components';

const TotalCont = styled.div`
min-height: 190px;
min-width: 350px;
padding: 10px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: start;
border-radius: 5px;
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
