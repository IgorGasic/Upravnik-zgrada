export default function validateInfo(values){
    let errors = {}

    if(!values.name){
        errors.name = "Morate uneti ime i prezime";
    }

    if(!values.email){
        errors.email = "Morate uneti email adresu"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Morate uneti pravilnu email adresu";
    }

    if(!values.subject){
        errors.subject = "Morate uneti naslov poruke";
    }

    if(!values.message){
        errors.message = "Morate napisati neku poruku";
    }

    return errors;
}