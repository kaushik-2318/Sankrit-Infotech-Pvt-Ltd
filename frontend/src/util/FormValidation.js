function Validation(values) {
    let errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (values.name == "") {
        errors.name = "Name is required";
    }
    else {
        errors.name = ""
    }

    if (values.email == "") {
        errors.email = "Email is required";
    }
    else if(!emailPattern.test(values.email)){
        errors.email = "Email is invalid"
    }
    else{
        errors.email = ""
    }
    
    
    if (values.subject == "") {
        errors.subject = "Subject is required";
    }
    else {
        errors.subject = ""
    }
    
    
    
    if (values.message == "") {
        errors.message = "Message is required";
    }
    else {
        errors.message = ""
    }
    return errors;
}


export default Validation;