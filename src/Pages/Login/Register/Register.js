import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


    }

    return (
        <div className='container w-50 mx-auto '>
            <h3 className='text-primary text-center mt-4'>Please Register</h3>
            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" name="name" id='' placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' id='' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' id='' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit" value="Register">Sign Up</Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin} >Please Sign In!</Link></p>
        </div>
    );
};

export default Register;