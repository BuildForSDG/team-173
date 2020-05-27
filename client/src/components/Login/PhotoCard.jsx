import React from 'react';
import final1 from '../../assets/images/final1.png';
import styled from 'styled-components';

const ImageHeight = styled.div`
    
`
const PhotoCard = ()=>{
    return(
        <ImageHeight>
            <img src={final1} width="90%" />
        </ImageHeight>
        
    )
}
export default PhotoCard;