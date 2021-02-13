import React from 'react';
import styled, {css} from 'styled-components';

const ImageCont = styled.img`
min-height: 190px;
max-width: 320px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: start;
border-radius: 10px;
background-color:black;
`;

const Image = ({img}) => {
    return<ImageCont src={img}/>
};

Image.defaultProps = {
    img:'./CAD.jpg',

};

export default Image;
