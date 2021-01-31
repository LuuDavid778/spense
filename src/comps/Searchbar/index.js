import React, {useState} from 'react'
import styled from 'styled-components'


const Input = styled.input`
width:100%;
height: 45px;
max-width: 356px;
border-radius: 5px;
background: #FFFFFF;
border: 1px solid #DDD9D9;
outline: none;
padding-left:50px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
background: url("./searchicon.png") 10px no-repeat;
`;

const Container = styled.div`

`;

const Icon = styled.img`
position:relative;

`;


const Searchbar = ({placeholder, value}) => {

    const [inputValue, setInputValue] = useState("")



    return <Container>
        <Input placeholder={placeholder} onChange={(e)=>{
         setInputValue(e.target.value);
        }}></Input>
</Container>
}

Searchbar.defaultProps = {
placeholder: "Default Placeholder"


}

export default Searchbar;

