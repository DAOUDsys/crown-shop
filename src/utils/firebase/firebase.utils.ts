import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User, NextOrObserver } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc,collection, writeBatch, query, getDocs, QueryDocumentSnapshot} from 'firebase/firestore'
import {Category} from '../../store/categories/category.types';


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

  export type objectToAdd = {title: string;}

  export const addCollectionAndDocuments = async <T extends objectToAdd>(collectionKey: string, objects: T[]):Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objects.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object); 
    });

    await batch.commit();
  }



  export const getCollectionAndDocuments = async ():Promise<Category[]> => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category);
    
    
  }

  export type AdditionalData = {
    name?: string;
  }

  export type UserData = {
    createdAt: Date;
    displayName: string;
    email: string;
  }

  export const createUserFromAuth = async (
    userAuth: User, 
    additionalData = {} as AdditionalData):Promise<void | QueryDocumentSnapshot<UserData>> => {

    
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createDate = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createDate, ...additionalData})
        } catch(error) {
            if(error === 'auth/email-already-in-use') {
                alert ("this email is already in use");
            } else {
                console.log("error while creating a user ", error);}
        }
    }
    return userSnapshot as QueryDocumentSnapshot<UserData>;
  };

  export const createRegularUser = async (email: string, password: string) => {

    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInRegularUser = async (email: string, password: string) => {

    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);