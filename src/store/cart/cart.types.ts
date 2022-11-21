import {CategoryItem} from '../categories/category.types';

export enum CartActionTypes {
    SET_CART_ITEMS = 'SET_CART_ITEMS',
};

export type CartItem = CategoryItem & {
    quantity: number;
}
