import React from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io';

const Container = styled.div`
min-height: 38px;
max-width: ${props => props.width ? props.width : "293px"};
min-width: 10px;
border-radius: 5px;
background-color: ${props => props.bgcolour ? props.bgcolour : "#698FF2"};
display:flex;
align-items:center;
justify-content: space-between;
color:#FFFFFF;
padding-left:15px;
padding-right:10px;
`;


const DropDown = ({label, bwidth, bcolour}) => {

    return <Container bgcolour={bcolour} width={bwidth}>
    {label}
    <IoIosArrowDown />
    </Container>
}

DropDown.defaultProps = {
label: "Foods&Drinks",
bwidth: null,
bcolour: null
}

export default DropDown

