import {UserActionTypes} from './user.types';
import { ActionWithPayload, createAction } from '../../utils/reducer/reducer.utils';
import { UserData } from '../../utils/firebase/firebase.utils';
import { withMatcher } from '../../utils/reducer/reducer.utils';

export type SetUser = ActionWithPayload<UserActionTypes.SET_CURRENT_USER, UserData>;

export const setCurrentUser = withMatcher((user: UserData):SetUser => createAction(UserActionTypes.SET_CURRENT_USER, user));
