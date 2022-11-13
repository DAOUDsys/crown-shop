import UserActionTypes from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categoriesArray) => createAction(UserActionTypes.SET_CATEGORIES, categoriesArray);