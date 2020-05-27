import React from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';
const StyleCard = styled.div`
background: #593F62;
display:flex;
justify-content: space-between;
padding: 0.5%;

`
const TitleH2 =  styled.h2`
    font-family: Ribeye;
    font-size: 2.6rem;
    color: white;
`
const LoginCard = ()=>{
    return(
        <StyleCard>
            <TitleH2>Give2Get</TitleH2>
            <LoginForm />
        </StyleCard>
    )
}
export default LoginCard;