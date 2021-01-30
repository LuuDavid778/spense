import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
min-height: 66px;
max-width: ${props => props.width ? props.width : "66px"};
min-width: 10px;
border-radius: 100px;
background-color: ${props => props.bgcolour ? props.bgcolour : "#698FF2"};
display:flex;
align-items:center;
justify-content:center;
`;

const AddItem = ({label, bwidth, bcolour}) => {

    return <Container bgcolour={bcolour} width={bwidth}>
    {label}
    </Container>
}

AddItem.defaultProps = {
label: "+",
bwidth: null,
bcolour: null
}

export default AddItem

