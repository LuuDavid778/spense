import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.button`
min-height: 43px;
max-width: ${props => props.width ? props.width : "118px"};
min-width: 90px;
background-color: ${props => props.bgcolor ? props.bgcolor : "#fff"};
border: ${props => props.stroke ? props.stroke : "1px solid #EAE7E7"};
color: ${props => props.color ? props.color : "#676767"};
display:flex;
text-align: center;
align-items:center;
justify-content: center;
padding-left:10px;
padding-right:10px;
border-radius: ${props => props.radius ? props.radius : "none"};
font-family: sans-serif;
font-size: 18px;
outline:none;
`;

const TimeSelect = ({name, bgcolor, stroke, color, radius, width, onSelect})=>{
    return <Container
        bgcolor={bgcolor} stroke={stroke}
        color={color} radius={radius} width={width}
        onClick={()=>{onSelect(name);}}>
        {name}
    </Container>
};

TimeSelect.defaultProps = {
    name: "Daily",
    bgcolor: "#FFFFFF",
    stroke: "1px solid #EAE7E7",
    color: "#676767",
    radius: "none"
};

export default TimeSelect;