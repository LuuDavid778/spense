import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Button from 'comps/Button';  
import Image from 'comps/Image';
import './opentrans.scss'
import '../../../src/App.scss'
import CategorySubhead from 'comps/CategorySubhead';

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
const OpenTrans = ({statuscolour}) => {

const [header, setHeader] = useState("Default Header")
const [status, setStatus] = useState("Paid")
const [desc, setDesc] = useState("Default Description")
const [img, setImg] = useState()






  return <div>
     <div className="bg"></div>
  <div className="main">
  <div className ="image"><Image img={img}></Image></div>
    <div className = "content">
    <Header>{header}</Header>
  <div className="subheader">
      <CategorySubhead/>
  </div>
  <div className = "status">
  <Status statuscolour={statuscolour}>{status}</Status>
  </div>
   
   <div className ="desc">
   {desc}
   </div>

    <div className="navigate">
        <Button iconsrc="./deleteicon.png" label="Delete" bgcolour="#F37C75"bwidth="140px"></Button>
        <Button iconsrc="./editicon.png" label="Edit" bwidth="140px"></Button>
    </div>

  </div>
  
</div>

</div>
}


OpenTrans.defaultProps={
statuscolour: null
}


export default OpenTrans;