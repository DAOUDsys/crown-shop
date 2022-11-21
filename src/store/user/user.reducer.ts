import { UserData } from "../../utils/firebase/firebase.utils";
import {AnyAction} from 'redux';
import {setCurrentUser} from './user.action';


export type UserState = {
    currentUser: UserData|null;
}

const INITIAL_STATE: UserState = {
    currentUser: null
}

export const UserReducer = (state = INITIAL_STATE, action: AnyAction) => {

    if(setCurrentUser.match(action)) {
        return {...state, currentUser: action.payload};
    }

    return state;

}
