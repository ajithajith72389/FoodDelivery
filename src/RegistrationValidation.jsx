import * as Yup from "yup"

export const RegistrationValidation =Yup.object({
    username : Yup.string().min(3).required("Enter your username"),
    email : Yup.string().email("Please Enter valid email").required("Enter your email"),
    password : Yup.string().min(5).required("Enter your password"),
    cpassword : Yup.string().oneOf([Yup.ref("password")], "Password not matched").required("Enter your password")
})