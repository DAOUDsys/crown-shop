import CategoryActionTypes from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const fetchCategoriesStart = () => 
createAction(CategoryActionTypes.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categoriesArray) => 
createAction(CategoryActionTypes.FETCH_CATEGORY_SUCCESS,categoriesArray);

export const fetchCategoriesFailed = (error) => 
createAction(CategoryActionTypes.FETCH_CATEGORY_FAILED, error);

////////////////////////////////////////////////////////////////////////
