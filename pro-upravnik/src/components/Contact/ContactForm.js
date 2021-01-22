import React, { useState } from 'react'
import Form from './Form';
import FormSuccess from './FormSuccess';

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <>
            {!isSubmitted ? (<Form submitForm={submitForm}/>) : (<FormSuccess/>)}

        </>
    )
}

export default ContactForm
