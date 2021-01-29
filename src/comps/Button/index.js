import React from 'react'
import styled from 'styled-components'
import add from '/add.png'
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

const Content = styled.div`
`;

const Icon = styled.img`
`;

const Button = ({label, bwidth, bcolour, iconsrc }) => {

    return <Container bgcolour={bcolour} width={bwidth}>

    <Content>
        <div></div>
        <div>{label}</div>
    </Content>

</Container>
}

Button.defaultProps = {
label: "custom button",
bwidth: null,
bcolour: null,

}

export default Button

