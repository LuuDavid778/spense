import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
min-height: 50px;
max-width: ${props => props.width ? props.width : "158px"};
min-width: 10px;
border-radius: 5px;
background-color: ${props => props.bgcolour ? props.bgcolour : "#698FF2"};
display:flex;
align-items:center;
justify-content:center;
`;

const Button = ({label, bwidth, bcolour}) => {

    return <Container bgcolour={bcolour} width={bwidth}>
    {label}
    </Container>
}

Button.defaultProps = {
label: "custom button",
bwidth: null,
bcolour: null
}

export default Button

