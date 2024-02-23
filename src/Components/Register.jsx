import { useFormik } from "formik"
import React from "react"
import { RegistrationValidation } from "../RegistrationValidation"
import { Link } from "react-router-dom"

const initialValues = {
    username: "",
    email: "",
    password: "",
    cpassword: ""
}

const Register = () => {

    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: RegistrationValidation,
        onSubmit: (value) => {
            console.log(value);
        }

    })

    return (
        <div className="col-12 d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="ms-5 me-5 ps-5 pe-5">
                <h2 className="ms-4 me-4 mt-4"><strong>Sign Up</strong></h2>
                <br />
                <label htmlFor="">Username</label>
                <br />
                <input type="text" name="username"
                    value={values.username} onChange={handleChange} onBlur={handleBlur}
                />
                <br />
                {errors.username && <small>{errors.username}</small>}
                <br />
                <label htmlFor="">Email</label>
                <br />
                <input type="email" name="email"
                    value={values.email} onBlur={handleBlur} onChange={handleChange}
                />
                <br />
                {errors.email && <small>{errors.email}</small>}
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input type="password" name="password"
                    value={values.password} onBlur={handleBlur} onChange={handleChange}
                />
                <br />
                {errors.password && <small>{errors.password}</small>}
                <br />
                <label htmlFor="">Confirm Password</label>
                <br />
                <input type="password" name="cpassword"
                    value={values.cpassword} onBlur={handleBlur} onChange={handleChange}
                />
                <br />
                {errors.cpassword && <small>{errors.cpassword}</small>}
                <br />
                <br />
                <button type="submit" className="d-flex ms-5 me-5 bg-warning ps-3 pe-3">Submit</button>
                <br />
                <p className="small fw-bold mt-2 pt-1 mb-0 ms-3 pe-3">If you have an account? <Link to={"/login"}
                    className="link-primary ms-5 me-5 pe-3">Login</Link>
                </p>
                <br />

            </form>
        </div>
    )
}
export default Register