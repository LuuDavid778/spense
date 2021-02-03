import React, {useState} from 'react';
import styled from 'styled-components';
import TimeSelect from '../TimeSelect';

const Container = styled.div`
min-height: 44px;
max-width:"317px";
min-width: 253px;
border-radius: 5px;
display:flex;
align-items:center;
`;


const Selection = () => {

    const [clickedSelect, setClickedSelect] = useState(null);

    const HandleSelect = (name) =>{
        setClickedSelect(name);
    };
    return <Container>
    <TimeSelect
        onSelect={HandleSelect}
        name="Daily"
        bgcolor={clickedSelect === "Daily" ? "#DAE4FF": null}
        stroke={clickedSelect === "Daily" ? "1px solid #698FF2" : null}
        color={clickedSelect === "Daily" ? "#698FF2" : null}
        radius="5px 0px 0px 5px"
    />
    <TimeSelect
        onSelect={HandleSelect}
        name="Weekly"
        bgcolor={clickedSelect === "Weekly" ? "#DAE4FF": null}
        stroke={clickedSelect === "Weekly" ? "1px solid #698FF2" : null}
        color={clickedSelect === "Weekly" ? "#698FF2" : null}
    />
    <TimeSelect
        onSelect={HandleSelect}
        name="Monthly"
        bgcolor={clickedSelect === "Monthly" ? "#DAE4FF": null}
        stroke={clickedSelect === "Monthly" ? "1px solid #698FF2" : null}
        color={clickedSelect === "Monthly" ? "#698FF2" : null}
        radius="0px 5px 5px 0px"
    />
    </Container>
}

Selection.defaultProps = {
}
export default Selection

