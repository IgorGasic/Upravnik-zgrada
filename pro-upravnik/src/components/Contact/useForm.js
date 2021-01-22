import {useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const useForm = (callback, validateInfo) =>{
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message:''
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const hadnleChange = e => {
        setValues({
            ...values,[e.target.name] : e.target.value
        })
    }

    const hadnleSubmit = e =>{
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true);

        emailjs.sendForm('gmail', 'template_lrod57t', e.target, 'user_LHctah7UXLj4ktsF3kmRT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
     });
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }        
        
    }, [errors])

    return {hadnleChange, values, hadnleSubmit, errors}
}

export default useForm;