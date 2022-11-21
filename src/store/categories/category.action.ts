import {CategoryActionTypes, Category} from './category.types';
import { createAction,Action,ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import {getCollectionAndDocuments} from '../../utils/firebase/firebase.utils';


export type FetchCategoriesStart = Action<CategoryActionTypes.FETCH_CATEGORY_START>;
export type FetchCategoriesSuccess = ActionWithPayload<CategoryActionTypes.FETCH_CATEGORY_SUCCESS,Category[]>;
export type FetchCategoriesFailed = ActionWithPayload<CategoryActionTypes.FETCH_CATEGORY_FAILED,Error>;

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher(():FetchCategoriesStart => 
createAction(CategoryActionTypes.FETCH_CATEGORY_START));

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess => 
createAction(CategoryActionTypes.FETCH_CATEGORY_SUCCESS,categoriesArray));

export const fetchCategoriesFailed = withMatcher((error: Error):FetchCategoriesFailed => 
createAction(CategoryActionTypes.FETCH_CATEGORY_FAILED, error));

////////////////////////////////////////////////////////////////////////
export const fetchCategoriesAsync = () => async (dispatch: any) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCollectionAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray))
    } catch (error:any) {
        dispatch(fetchCategoriesFailed(error))
    }
}