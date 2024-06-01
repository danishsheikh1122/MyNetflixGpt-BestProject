import React from 'react'

const validate = (email,password) => {
    // console.log(email,password)
    const isEmailValidate=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) 
    // if(!isEmailValidate) return "email ID not valid";
    // if(!isPasswordValidate) return "password not valid";
    if(!isEmailValidate || !isPasswordValidate) return "email ID or password not valid";
    return null;
}

export default validate
