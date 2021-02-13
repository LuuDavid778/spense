import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 316px;
    background-color:#FFFFFF;
    border-radius: 5px;
    border: 1px solid #DDD9D9;
    display:flex;
    align-items:center;
    justify-content:end;
    padding-left: 5px;
`;

const Search = styled.input`
width:100%;
height: 35px;
margin-left: 15px;
border-radius: 5px;
border: none;
outline: none;
font-style: normal;
font-weight: normal;
font-size: 20px;
::placeholder{
    color: #DDD9D9;
}

`;




const Searchbar = ({placeholder, value, onChange}) => {

    const [inputValue, setInputValue] = useState("")



    return <Container>
        <img src="./searchIcon.png"/>
        <Search placeholder={placeholder} onChange={onChange}></Search>
    </Container>
}

Searchbar.defaultProps = {
placeholder: "Search Transactions"


}

export default Searchbar;

