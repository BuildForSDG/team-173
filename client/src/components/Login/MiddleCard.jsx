import React from 'react';
import PhotoCard from './PhotoCard';
import SignUp from './SignUp';
import styled from 'styled-components';
const FlexDiv = styled.div`
margin-right: 5%;
margin-left: 1%;
display: flex;
`
const MiddleCard = ()=>{
    return(
        <FlexDiv>
        <PhotoCard />
        <SignUp />
        </FlexDiv>
    )
}
export default MiddleCard;