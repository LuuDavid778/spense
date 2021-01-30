import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
min-height: 66px;
max-width: 66px;
min-width: 10px;
border-radius: 100px;
background-color:#698FF2;
display:flex;
align-items:center;
justify-content:center;
`;

const AddItem = ({label}) => {

    return <Container>
    {label}
    </Container>
}

AddItem.defaultProps = {
label: "+"
}

export default AddItem

