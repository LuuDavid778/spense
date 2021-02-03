import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Container = styled.div`
min-width:330px;
max-width:330px;
min-height:59px;
max-height:80px;
border-radius: 5px;
background-color: #FFFFFF;
display:flex;
align-items:center;
justify-content:center;
border:1px solid #DDD9D9;
`

const Content = styled.div`
min-width:280px;
max-width:330px;
min-height:42px;
max-height:80px;
background-color: #FFFFFF;
display:flex;
justify-content:space-between;
`

const Left = styled.div`
min-width:175px;
max-width:175px;
min-height:42px;
max-height:80px;
background-color: #FFFFFF;
display:flex;
justify-content:space-between;
flex-direction:column;
font-family: Roboto;
text:${props=>props.category ? props.category : "Category"}
text:${props=>props.item ? props.item : "Item"}
`

const Right = styled.div`
min-width:125px;
max-width:125px;
min-height:42px;
max-height:80px;
background-color: #FFFFFF;
display:flex;
justify-content:space-between;
flex-direction:column;
text-align:right;
font-family: Roboto;
text:${props=>props.cost ? props.cost : "$0.00"}
text:${props=>props.status ? props.status : "Status"}
`

//To control weight size and other things related to text
const Textcontrol = styled.div`
color:${props=>props.color ? props.color : "#F26969"};
font-size:${props=>props.size ? props.size : "10px"};
`





const TransactionListItem = ({category, item, cost, status, size, color, display}) =>{
    const [triggeredItemAction, triggerItemAction] = useState('None');
    const [swipeProgress, handleSwipeProgress] = useState();
    const [swipeAction, handleSwipeAction] = useState('None');


    return <Container>
        <Content>

            <Left>
                <Textcontrol size="18px" color="black">
                {category}
                </Textcontrol >
                <Textcontrol size="14px" color="black">
                {item}
                </Textcontrol>
            </Left>

            <Right> 
                <Textcontrol size="18px" color="black">
                ${cost}
                </Textcontrol >

                <Textcontrol size="18px" color={color}>
                {status}
                 </Textcontrol >
            </Right>

        </Content>
        </Container>

}

TransactionListItem.defaultProps = {
    category:"Category",
    item:"Item",
    cost:"0.00",
    status:"Status",
    size:"10px",
    color:"#F26969",
    display:"none"
}

export default TransactionListItem;