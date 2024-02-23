import * as Yup from "yup"

export const LoginValidation=Yup.object({
    email : Yup.string().email("Please enter valid email"). required("Enter your email"),
    password : Yup.string().min(5).required("Enter your password")
})
