import React from 'react'
import {SuccessForm, SuccessText, SuccessWrapper, SuccessButton} from './Form.styled';

const FormSuccess = () => {
    return (
        <>
            <SuccessWrapper>
                <SuccessForm>
                    <SuccessText>Uspesno ste poslali poruku!</SuccessText>
                    <SuccessButton to="/">Nazad na pocetnu</SuccessButton>
                </SuccessForm>
            </SuccessWrapper>

        </>
    )
}

export default FormSuccess
