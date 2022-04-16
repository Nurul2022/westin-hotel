import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if(loading || updating){
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user)
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // const agree = event.target.terms.checked;

     await createUserWithEmailAndPassword(email, password);
     await updateProfile({ displayName: name});
     console.log('Updated profile');
     navigate('/home');

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

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-primary' : 'text-danger'} onClick={() => setAgree(!agree)}
                        type="checkbox" name='terms' id='terms' label='Accept Terms and Conditions' />
                </Form.Group>

                <Button disabled={!agree} variant="primary w-50 mx-auto d-block mb-2 p-2" type="submit" value="Register">Sign Up</Button>
            </Form>
            <p>Already have an account? <Link to='/login'
                className='text-primary text-decoration-none'
                onClick={navigateLogin} >Please Sign In!</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;

// className={agree ? 'text-primary' : 'text-danger'}
// <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Terms and Conditions</label>
// <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label>