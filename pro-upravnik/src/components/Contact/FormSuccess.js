import React from 'react';
import check from '../../imgs/check.svg';
import {
    SuccessForm, 
    SuccessText, 
    SuccessWrapper, 
    SuccessButton,
    SuccessImg}from './Form.styled';

const FormSuccess = () => {
    return (
        <>
            <SuccessWrapper>
                <SuccessForm>
                    <SuccessImg src={check} alt="success-img"/>
                    <SuccessText>Uspešno ste poslali poruku!</SuccessText>
                </SuccessForm>
                <SuccessButton to="/">Nazad na početnu</SuccessButton>
            </SuccessWrapper>

        </>
    )
}

export default FormSuccess
