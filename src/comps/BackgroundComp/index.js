import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { NonceProvider } from 'react-select';


const Container = styled.div`
position: absolute;
left: 0px;
top: -350px;
z-index: -1;
height: 500vw;
width:100vh;
background-color: black;
opacity:50%;
display:none;
${props => props.bgChange === true && css `
    display:flex;  `  }
`;



const BackgroundChange = ({bgChange}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return <Container bgChange={bgChange}>
    </Container>
}

BackgroundChange.defaultProps = {

}

export default BackgroundChange;

