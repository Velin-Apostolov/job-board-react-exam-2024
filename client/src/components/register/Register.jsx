import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as authService from "../../services/authService";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const initialState = {
    email: '',
    username: '',
    password: '',
    repeatPass: '',
    accountType: false,
}

function Register() {
    const [formValues, setFormValues] = useState(initialState);
    const navigate = useNavigate();

    const toggleHandler = (e) => setFormValues(state => ({
        ...state,
        [e.target.name]: e.target.checked
    }));

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const resetFormHandler = () => {
        setFormValues(initialState);
    }

    const formHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('accountType', formValues.accountType ? 'company' : 'user');
        const data = Object.fromEntries(formData);

        try {
            await authService.register(data);
            resetFormHandler();
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <section id="register-page" className="auth">
            <Form className='register-form' onSubmit={formHandler}>
                <h2>Register</h2>
                <div className="toggle-buttons-wrapper">
                    <div className="option-wrapper-user">
                        <h3 className={!formValues.accountType ? "active" : "inactive"}>User</h3>
                    </div>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label=""
                        name="accountType"
                        checked={formValues.accountType}
                        onChange={toggleHandler}
                    />
                    <div className="option-wrapper-company">
                        <h3 className={formValues.accountType ? "active" : "inactive"}>Company</h3>
                    </div>
                </div>
                <Form.Group className="mb-3">
                    <Form.Label id="email-register-label" htmlFor='email' className='email-label'>Email address</Form.Label>
                    <Form.Control id="email" className="email-input" type="email" placeholder="Enter email" name='email' value={formValues.email} onChange={onChange} autoComplete="email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor='username' className='username-label'>Username</Form.Label>
                    <Form.Control id="username" className="username-input" type="username" placeholder="Enter username" name='username' value={formValues.username} onChange={onChange} autoComplete="username" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='password-label' htmlFor="password">Password</Form.Label>
                    <Form.Control id="password" className="password-input" type="password" placeholder="Password" name='password' value={formValues.password} onChange={onChange} autoComplete="new-password" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='repeat-password-label' htmlFor="repeatPass">Repeat Password</Form.Label>
                    <Form.Control id="repeatPass" className="repeat-password-input" type="password" name='repeatPass' value={formValues.repeatPass} onChange={onChange} autoComplete="new-password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    )
}

export default Register;