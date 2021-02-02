import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color:#FFFFFF;
    border-radius: 5px;
`;

const Search = styled.input`
width:100%;
height: 35px;
width: 316px;
border-radius: 5px;
border: 1px solid #DDD9D9;
outline: none;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
background: url("./searchIcon.png") 10px no-repeat;
`;




const Searchbar = ({placeholder, value}) => {

    const [inputValue, setInputValue] = useState("")



    return <Container>
        <Search placeholder={placeholder} onChange={(e)=>{
         setInputValue(e.target.value);
        }}></Search>
</Container>
}

Searchbar.defaultProps = {
placeholder: "         Search Transactions"


}

export default Searchbar;

