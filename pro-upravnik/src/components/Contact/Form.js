import React from 'react'
import useForm from './useForm';
import validateInfo from './validateInfo';
import {
    FormWrapper,
     StyledFrom, 
     FormInput, 
     FormTextArea, 
     FormButton, 
     InfoHeading, 
     FormError, 
     FormLable} from './Form.styled';


const Form = ({submitForm}) => {

    const {hadnleChange, values, hadnleSubmit, errors} = useForm(submitForm, validateInfo);

    return (
        <>  
            <InfoHeading>Ukoliko imate bilo kakva pitanja možete nas kontaktirati na telefon 064/160-94-47 ili nam poslati email putem forme</InfoHeading>
                <FormWrapper>
                    <StyledFrom onSubmit={hadnleSubmit}>
                        <FormLable htmlFor="name">Ime i prezime</FormLable>
                        <FormInput type="text" id="name" name="name" value={values.name} onChange={hadnleChange} autoComplete="off"/>
                        {errors.name && <FormError> <p>{errors.name}</p> </FormError> }
                        <FormLable htmlFor="email">Email</FormLable>
                        <FormInput type="email" id="email" name="email" value={values.email} onChange={hadnleChange} autoComplete="off"/>
                        {errors.email && <FormError> <p>{errors.email}</p> </FormError> }
                        <FormLable htmlFor="subject">Naslov poruke</FormLable>
                        <FormInput type="text" id="subject" name="subject" value={values.subject} onChange={hadnleChange} autoComplete="off"/>
                        {errors.subject && <FormError> <p>{errors.subject}</p> </FormError> }
                        <FormLable htmlFor="message">Poruka</FormLable>
                        <FormTextArea id="message" name="message" value={values.message} onChange={hadnleChange}/>
                        {errors.message && <FormError> <p>{errors.message}</p> </FormError>} 
                        <FormButton type="submit">Pošalji poruku</FormButton>
                    </StyledFrom>
                </FormWrapper>
        </>
    )
}

export default Form
