import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
min-height: 66px;
min-width: 66px;
border-radius: 100px;
background-color:#698FF2;
display:flex;
align-items:center;
justify-content:center;
color: #FFFFFF;
font-size: 32px;
padding: 0;
`;

const AddItem = () => {

    return <Container>
    <img src="./addtransactionicon.png"/>
    </Container>
}

AddItem.defaultProps = {
}

export default AddItem

