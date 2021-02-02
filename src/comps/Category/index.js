import React from 'react'
import styled from 'styled-components'
// import Addicon from './addicon.png'

const Container = styled.div`
width:100%;
height: 248px;
max-width: 356px;
border-radius: 2px 2px 10px 10px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
color: #676767;
box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
display:${props=>props.display ? props.display : "none"}
`;

const Row1 = styled.div`
margin-top:15px;
width:80%;
display:flex;
height:50px;
justify-content:space-between;
`;

const Row2 = styled.div`
margin-top:20px;
width:80%;
display:flex;
height:50px;
justify-content:space-between;
`;

const Row3 = styled.div`
margin-top:20px;
width:80%;
display:flex;
height:50px;
justify-content:space-between;
`;

const Foods = styled.div`
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
&> img {
    margin-right:8px;
}
`;

const Beauty = styled.div`
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
&> img {
    margin-right:10px;
}
`;

const Bills = styled.div`
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
&> img {
    margin-right:10px;
}
`;

const Personal = styled.div`
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
position:relative;
right:55px;
&> img {
    margin-right:13px;
}
`;

const Entertainment = styled.div`
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
&> img {
    margin-right:10px;
}
`;

const Others = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:relative;
cursor:pointer;
right:65px;
&> img {
    margin-right:10px;
}
`;

const Label = styled.div`
color:#C4C4C4;
    `;
const Category = ({display}) => {

return <Container display="in-line" >
    <Row1>
    <Foods>
        <img src="./foodsicon.png"></img>
        <div>Foods & Drink</div>
    </Foods>
    <Beauty>
        <img src="./beautyicon.png"></img>
        <div>Beauty & Health</div>
    </Beauty>
</Row1>
<Row2>
    <Bills>
    <img src="./billsicon.png"></img>
        <div>Bills & Fees</div>
    </Bills>

    <Personal>
    <img src="./personalicon.png"></img>
    <div>Personal</div>
    </Personal>
</Row2>

<Row3>
    <Entertainment>
    <img src="./entertainmenticon.png"></img>
    <div>Entertainment</div>
    </Entertainment>
    
    <Others>
    <img src="./othersicon.png"></img>
    <div>Others</div>
    </Others>
    </Row3>

<Label>All Categories</Label>
</Container>
}

Category.defaultProps = {
    display:"none"
}

export default Category;

