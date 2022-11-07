import { useState } from 'react';
import './sign_up_form.style.scss';
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth';
import {createUserFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component'; 
import Button from '../button/button.component';

const defaultFormData = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {

    const [formData, setFormData] = useState(defaultFormData);
    const {displayName,email,password,confirmPassword} = formData;

    const handelChange = (values) => {
        const {name,value}= values.target;
        setFormData({...formData, [name]:value});
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        if(password === confirmPassword) {
            try {
                const auth = getAuth();
                const {user} = await createUserWithEmailAndPassword(auth,email,password);
                await createUserFromAuth(user, { displayName });
                resetFormData();
            } catch(error) {
                console.error("error while creating a user ", error.message);
            }
        } else {
            alert("password does not match");
            return;
        }
    }

    const resetFormData = () => {
        setFormData(defaultFormData);
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={ handelSubmit }>
                <FormInput label='Display name' type="text" name='displayName' value={displayName} onChange={handelChange} required/>
                <FormInput label='Email' type="email" name='email' value={email} onChange={handelChange} required/>
                <FormInput label='Password' type="password" minLength='8' name='password' value={password} onChange={handelChange} required/>
                <FormInput label='Confirm Password' type="password" minLength='8' name='confirmPassword' value={confirmPassword} onChange={handelChange} required/>

                <Button children='Sign Up'  type='submit' />
            </form>
        </div>
    );
};

export default SignUpForm;