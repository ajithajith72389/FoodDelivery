import { Formik, useFormik } from "formik"
import { LoginValidation } from "../LoginValidation";
import { Link } from "react-router-dom";

const InitialValues = {
    email: "",
    password: ""
}

const Login = () => {
    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: InitialValues,
        validationSchema: LoginValidation,
        onSubmit: (value) => {
            console.log(value);
        }
    })


    return (
        <div className="container-fluid d-flex justify-content-center mt-5 col-12 p-5">
            <form onSubmit={handleSubmit} className="ms-5 me-5 ps-5 pe-5">
                <h2 className="ms-5 me-5 mt-4"><strong>Sign In</strong></h2>
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
                <br />
                <button type="submit" className="d-flex justify-content-center ms-5 me-5 ps-3 pe-3 bg-warning ">Submit</button>
                <br />
                <p className="small fw-bold mt-2 pt-1 mb-0 ms-3 pe-3">Don't have an account? <Link to={"/register"}
                    className="link-primary ms-5 me-5 pe-3">Register</Link>
                </p>
                <br />
            </form>
        </div>
    )
}
export default Login
