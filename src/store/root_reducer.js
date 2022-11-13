import {combineReducers} from 'redux';
import { UserReducer } from './user/user.reducer';
import { CategoryReducer } from './categories/category.reducer';
import { CartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
    user: UserReducer,
    category: CategoryReducer,
    cart: CartReducer
})