import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, } from 'firebase/auth';
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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth();
  export const signInWithGoogle = () => signInWithPopup(auth,googleProvider);


  export const db =getFirestore();

  export const createUserFromAuth = async (userAuth,additionalData) => {

    
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createDate = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createDate, ...additionalData})
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert ("this email is already in use");
            } else {
                console.log("error while creating a user ", error.message);}
        }
    }
    return userDocRef;
  };

  export const createRegularUser = async (email, password) => {

    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }