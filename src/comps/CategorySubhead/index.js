import React from 'react'
import styled from 'styled-components'
// import Addicon from './addicon.png'

const Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
`;

const CategoryImg = styled.img`
margin-right:10px;
`;

const CategoryName = styled.div`
font-weight: 500;
color:#676767;
`;

const InnerCont = styled.div`
display:flex;
`;

const Price = styled.div`
font-weight:500;
color:#676767;
`;
const CategorySubhead = ({iconsrc, category, price}) => {

    return <Container>
<InnerCont>
<CategoryName>{category}</CategoryName>
</InnerCont>
<Price>${price}</Price>

</Container>
}

CategorySubhead.defaultProps = {
iconsrc: './foodsicon.png',
category: 'Foods & Drink',
price: 100
}

export default CategorySubhead;

