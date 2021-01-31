import React from 'react';
import styled, {css} from 'styled-components';

const ImageCont = styled.img`
min-hight: 190px;
min-width: 350px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: start;
border-radius: 10px;
`;

const Image = ({img}) => {
    return<ImageCont src={img}/>
};

Image.defaultProps = {
    img:'./subway.png',

};

export default Image;