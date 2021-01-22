import React from 'react'
import {FormWrapper, StyledFrom, FormInput, FormTextArea, FormButton, InfoHeading, FormError} from './Form.styled';
import useForm from './useForm';
import validateInfo from './validateInfo';

const Form = ({submitForm}) => {

    const {hadnleChange, values, hadnleSubmit, errors} = useForm(submitForm, validateInfo);

    return (
        <>  
            <InfoHeading>Ukoliko imate bilo kakva pitanja možete nas kontaktirati na telefon 064/160-94-47 ili nam poslati email putem forme</InfoHeading>
                <FormWrapper>
                    <StyledFrom onSubmit={hadnleSubmit}>
                        <label htmlFor="name" style={{fontWeight:"bold"}}>Ime i prezime</label>
                        <FormInput type="text" name="name" value={values.name} onChange={hadnleChange} autoComplete="off"/>
                        {errors.name && <FormError> <p>{errors.name}</p> </FormError> }
                        <label htmlFor="email" style={{fontWeight:"bold"}}>Email</label>
                        <FormInput type="email" name="email" value={values.email} onChange={hadnleChange} autoComplete="off"/>
                        {errors.email && <FormError> <p>{errors.email}</p> </FormError> }
                        <label htmlFor="subject" style={{fontWeight:"bold"}}>Naslov poruke</label>
                        <FormInput type="text" name="subject" value={values.subject} onChange={hadnleChange} autoComplete="off"/>
                        {errors.subject && <FormError> <p>{errors.subject}</p> </FormError> }
                        <label htmlFor="message" style={{fontWeight:"bold"}}>Poruka</label>
                        <FormTextArea name="message" value={values.message} onChange={hadnleChange}/>
                        {errors.message && <FormError> <p>{errors.message}</p> </FormError>} 
                        <FormButton type="submit">Posalji poruku</FormButton>
                    </StyledFrom>
                </FormWrapper>
        </>
    )
}

export default Form
