import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZ6cf-qwmD5yR1xvJnwKig3Vm5cBIGdtY",
    authDomain: "crown-shop-db-4591b.firebaseapp.com",
    projectId: "crown-shop-db-4591b",
    storageBucket: "crown-shop-db-4591b.appspot.com",
    messagingSenderId: "348847217803",
    appId: "1:348847217803:web:c83972f7de28b54567088e"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

  export const db =getFirestore();

  export const createUserFromAuth = async (uerAuth) => {
    const userDocRef = doc(db,'users',uerAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = uerAuth;
        const createDate = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createDate})
        } catch(error) {
            console.log("error while creating a user ", error.message);
        }
    }
    return userDocRef;
  };