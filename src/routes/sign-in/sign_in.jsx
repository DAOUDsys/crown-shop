import './sign_in.style.scss';
import { signInWithGooglePopup, createUserFromAuth,  } from '../../utils/firebase/firebase.utils';


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const usertDocRef = await createUserFromAuth(user);
    }

    return (<div>
        <h1>sign in page</h1>
        <button onClick={logGoogleUser}>
            sign in with google popup
        </button>
    </div>)
};

export default SignIn;