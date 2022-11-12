import { useState } from 'react';
import './sign_in_form.style.scss';
import FormInput from '../form-input/form-input.component'; 
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import {signInWithGoogle, signInRegularUser} from '../../utils/firebase/firebase.utils';


const defaultFormData = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const logGoogleUser = async () => {
        await signInWithGoogle();
    }

    const [formData, setFormData] = useState(defaultFormData);
    const {email,password} = formData;

    const handelChange = (values) => {
        const {name,value}= values.target;
        setFormData({...formData, [name]:value});
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        
            try {
                await signInRegularUser(email, password);
                resetFormData();
            } catch(error) {
                if(error.code === 'auth/wrong-password')
                {
                    alert("incorrect password")
                }
                else if(error.code === 'auth/user-not-found')
                {
                    alert("incorrect email")
                }
                console.log(error);
            }
        
    }

    const resetFormData = () => {
        setFormData(defaultFormData);
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={ handelSubmit }>
                <FormInput label='Email' type="email" name='email' value={email} onChange={handelChange} required/>
                <FormInput label='Password' type="password" minLength='8' name='password' value={password} onChange={handelChange} required/>
                {/* <span style={{
                    color:'red', display:'none',
                }}>incorrect password</span> */}
                <div className='button-container'>
                <Button children='SIGN IN'  type='submit' />
                <Button children='GOOGLE SIGN IN' type='button' onClick={logGoogleUser} buttonType={BUTTON_TYPE_CLASSES.google} />

                </div>
            </form>
        </div>
    );
};

export default SignInForm;