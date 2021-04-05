import {useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const useForm = (submitForm, validateInfo) =>{
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message:''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [send, setSend] = useState(false);
    useEffect(() => {
        if(Object.keys(errors).length === 0){
            if(isSubmitting === true){
                setSend(true);
            }
        } 
    }, [errors])

    const hadnleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,[name] : value
        });
        setErrors(validateInfo(values));
        setIsSubmitting(true);
    }

    const hadnleSubmit = e =>{
        e.preventDefault();
        setErrors(validateInfo(values));        
        


     if(send){emailjs.sendForm('gmail', 'tempate_lrod57t', e.target, 'user_LHctah7UXLj4ktsF3kmRT')
        .then((result) => {
            console.log(result.text);
        }, (errors) => {
            console.log(errors.text);
     });
    }
};

    return {hadnleChange, values, hadnleSubmit, errors}
}

export default useForm;