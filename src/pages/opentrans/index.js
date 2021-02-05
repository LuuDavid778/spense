import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Button from 'comps/Button';  
import Image from 'comps/Image';
import './opentrans.scss'
import '../../../src/App.scss'
import CategorySubhead from 'comps/CategorySubhead';
import { Link, useHistory } from "react-router-dom";


const Header = styled.h1`
margin:0px;
color:#424242;
`;

const Status = styled.div`
color: ${props=> props.statuscolour ? props.statuscolour : "#F2AB69"};
`;

const Desc = styled.div`
width:100%;
`;

const OpenTrans = ( props, {statuscolour}) => {
  const history = useHistory();

const [header, setHeader] = useState("Default Header")
const [status, setStatus] = useState("Paid")
const [desc, setDesc] = useState("Default Description")
const [img, setImg] = useState()
const [category, setCategory]= useState("Default Category")


var itemMemory = props.location.state.o;
console.log(itemMemory);


  return <div>
     <div className="bg">
     <Link to ="/"><img  className ="exiticon" src = "./exiticon.png"></img></Link>
       </div>
  <div className="main">
  <div className ="image"><Image img={img}></Image></div>
    <div className = "content">
    <Header>{itemMemory.tname}</Header>
  <div className="subheader">
      <CategorySubhead category={itemMemory.category} price={itemMemory.cost}/>
  </div>
  <div className = "status">
  <Status statuscolour={statuscolour}>{itemMemory.status}</Status>
  </div>
   
   <div className ="desc">
   {itemMemory.description}
   </div>

    <div className="navigate">
    
        <Button iconsrc="./deleteicon.png" label="Delete" bgcolour="#F37C75"bwidth="140px" mwidth="140x"></Button>

      <Button onClick={()=>{
        history.push('/edittransaction', {params: itemMemory})
      }}iconsrc="./editicon.png" label="Edit" bwidth="140px" mwidth="140px"></Button>
    </div>

  </div>
  
</div>

</div>
}


OpenTrans.defaultProps={
statuscolour: null
}


export default OpenTrans;