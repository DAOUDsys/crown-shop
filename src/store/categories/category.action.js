import CategoryActionTypes from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import {getCollectionAndDocuments} from '../../utils/firebase/firebase.utils.js';

export const fetchCategoriesStart = () => 
createAction(CategoryActionTypes.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categoriesArray) => 
createAction(CategoryActionTypes.FETCH_CATEGORY_SUCCESS,categoriesArray);

export const fetchCategoriesFailed = (error) => 
createAction(CategoryActionTypes.FETCH_CATEGORY_FAILED, error);

////////////////////////////////////////////////////////////////////////
export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCollectionAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        dispatch(fetchCategoriesFailed(error))
    }
}