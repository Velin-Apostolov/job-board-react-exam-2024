import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"

function Login() {
    return (
        <section id='login-page' className='auth'>
            <Form className='login-form'>
                <h2>Login</h2>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='email' className='email-label'>Email address</Form.Label>
                    <Form.Control className="email-input" type="email" placeholder="Enter email" name='email' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='password-label'>Password</Form.Label>
                    <Form.Control className="password-input" type="password" placeholder="Password" name='password' />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    );
}

export default Login;