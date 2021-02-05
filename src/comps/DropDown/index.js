import React from 'react'
import styled from 'styled-components'
import Select from 'react-select';

// const optionCategory = [
//     {value: 'Foods&Drinks' , label: 'Foods&Drinks'},
//     {value: 'Bills&Fees' , label: 'Bills&Fees'},
//     {value: 'Beauty&Health' , label: 'Beauty&Health'},
//     {value: 'Personal' , label: 'Personal'},
//     {value: 'Others' , label: 'Others'},
//     {value: 'All Categories' , label: 'All Categories'}
// ]

const Container = styled.div`
width: 100%;
display:flex;
align-items: center;
justify-content: space-between;
`;


export function DropDown({onClick, onChange, data}) {

    function customTheme(theme){
        return{
            ...theme,
            colors:{
                ...theme.colors,
                primary25:'#698FF2',
                primary:'#F2AB69'
            }
        }
    }

    return <Container >
        <Select
            options = {data}
            theme = {customTheme}
            placeholder = 'Categories'
            onChange = {onChange}
        />
    </Container>
}

DropDown.defaultProps = {

}

export default DropDown

