import { Dropdown } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import DropDown from 'comps/DropDown'
import Category from 'comps/Category'

const Container = styled.div`
width:100%;
max-width: 353px;
height:100%;
max-height:203px;
`

const Display = styled.div`
display:${props=>props.showMenu ? "inline-flex" : "none"}
`


const CombinedDrop = ({label}) =>{

    const [showMenu, setShowMenu] = useState(false);


    return <Container>
        <div onClick={()=>{
            setShowMenu(!showMenu);
        }} >
        <DropDown label={label}/>
        </div>
        <Display showMenu={showMenu} >
        <Category />
        </Display>
    </Container>
}

CombinedDrop.defaultProps={
 label:"text"
}

export default CombinedDrop;