import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
min-height: 44px;
max-width: ${props => props.width ? props.width : "317px"};
min-width: 253px;
border-radius: 5px;
display:flex;
align-items:center;
`;

const Container1 = styled.div`
min-height: 43px;
max-width: ${props => props.width ? props.width : "118px"};
min-width: 72px;
background-color: ${props => props.bgcolour ? props.bgcolour : "#fff"};
border: ${props => props.stroke ? props.stroke : "1px solid #EAE7E7"};
color: ${props => props.color ? props.color : "#676767"};
display:flex;
align-items:center;
padding-left:10px;
padding-right:10px;
border-radius: 5px 0px 0px 5px;
`;

const Container2 = styled.div`
min-height: 43px;
max-width: ${props => props.width ? props.width : "118px"};
min-width: 72px;
background-color: ${props => props.bgcolour ? props.bgcolour : "#fff"};
border: ${props => props.stroke ? props.stroke : "1px solid #EAE7E7"};
color: ${props => props.color ? props.color : "#676767"};
display:flex;
align-items:center;
padding-left:10px;
padding-right:10px;
`;
const Container3 = styled.div`
min-height: 43px;
max-width: ${props => props.width ? props.width : "118px"};
min-width: 72px;
background-color: ${props => props.bgcolour ? props.bgcolour : "#fff"};
border: ${props => props.stroke ? props.stroke : "1px solid #EAE7E7"};
color: ${props => props.color ? props.color : "#676767"};
display:flex;
align-items:center;
padding-left:10px;
padding-right:10px;
border-radius: 0px 5px 5px 0px;
`;

const Selection = ({label, bwidth, bcolour, stroke, color}) => {

    return <Container bgcolour={bcolour} width={bwidth}>
    <Container1 bgcolour={bcolour} width={bwidth} stroke={stroke} color={color}>
    Daily
    </Container1>
    <Container2 bgcolour={bcolour} width={bwidth} stroke={stroke} color={color}>
    Weekly
    </Container2>
    <Container3 bgcolour={bcolour} width={bwidth} stroke={stroke} color={color}>
    Monthly
    </Container3>
    </Container>
}

export default Selection

