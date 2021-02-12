import React, { Component, useState } from "react";
import Switch from "react-switch";
import styled from 'styled-components'

const Status = styled.div`
margin-left:10px;
font-weight:bold;
color: ${props=> props.color ? props.color :  "#F2AB69"}
`;
const Container = styled.div`
display:flex;
`;

const Toggle = ({handleToggle}) => {
    const [checked, setChecked] = useState(false);
    const [status, setStatus] = useState("Unpaid");
    const [statuscolor, setStatusColor]= useState(null)
    const handleChange = nextChecked => {
     
      setChecked(nextChecked);
      if (status === "Unpaid"){
        setStatus("Paid")
        setStatusColor("#698FF2")
        
      } else if (status === "Paid"){
        setStatus("Unpaid")
        setStatusColor("#F2AB69")
      }
    };

    return (
      <Container>
          <Switch
            onChange={handleChange}
            checked={checked}
            className="react-switch"
            offColor="#F2AB69"
            onColor="#698FF2"
          />
<Status onChange={handleToggle(status)}color={statuscolor}>{status}</Status>
</Container>
    );
  };

Toggle.defaultProps = {
handleToggle:()=>{}
}

  export default Toggle;
















/*import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
min-width:81px;
max-width:81px;
min-height:36px;
max-height:36px;
padding-left:5px;
background: #F2AB69;
border-radius: 35px;
display:flex;
align-items:center;
`

const Circle = styled.div`
min-width:25px;
max-width:28px;
min-height:28px;
max-height:50px;
background: #FFFFFF;
border-radius:50%;
`

const Switch = ({}) => {
    return <Container>
     
        <Circle>

        </Circle>
    
    </Container>
}


export default Switch; */
