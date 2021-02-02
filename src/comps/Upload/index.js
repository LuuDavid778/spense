import React from 'react';
import styled, {css} from 'styled-components';

const UploadCont = styled.div`
max-height: 125px;
max-width: 210px;
background-color:#698FF2;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
padding: 20px;
p{
    font-family: sans-serif;
    color: #FFFFFF;
    font-size: 14px;
}
`;

const Upload = () => {
    return<UploadCont>
        <img src="./uploadIcon.png"/>
        <p>Upload Image</p>
    </UploadCont>
};

Upload.defaultProps = {

};

export default Upload;
