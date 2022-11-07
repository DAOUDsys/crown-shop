import './sign_in.style.scss';
import SignUpForm from '../../components/sign-up-form/sign_up_form';
import SignInForm from '../../components/sign-in-form/sign_in_form';

const SignIn = () => {


    return (<div >
        <div className='container'>
        <SignUpForm />
        <SignInForm />

        </div>
    </div>)
};

export default SignIn;