import { createContext, useState, useEffect, useReducer } from "react";
import {onAuthStateChangedListener, createUserFromAuth} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const UserActionTypes ={
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const UserReducer = (state, action) => {

    const {type, payload} = action;

    switch(type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled type ${type} in user Reducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({children}) => {

    // const [currentUser, setCurrentUser] =useState(null);
    const [{currentUser},dispatch] = useReducer(UserReducer,INITIAL_STATE);
    // const {currentUser} = state; we can do that or we can distructcher current user from state immediately

    const setCurrentUser = (user) => {
        dispatch({type: UserActionTypes.SET_CURRENT_USER, payload: user})
    }
    

    const value = {currentUser, setCurrentUser};

    useEffect (() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

}