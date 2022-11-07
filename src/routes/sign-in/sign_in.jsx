import './sign_in.style.scss';
import {signInWithGoogle, createUserFromAuth} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign_up_form';

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGoogle();
        const usertDocRef = await createUserFromAuth(user);
    }


    return (<div>
        <h1>sign in page</h1>
        <button onClick={logGoogleUser}> sign in with google popup </button>
        <SignUpForm />
    </div>)
};

export default SignIn;