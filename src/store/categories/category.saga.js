import {fetchCategoriesSuccess, fetchCategoriesFailed} from './category.action';
import {getCollectionAndDocuments} from '../../utils/firebase/firebase.utils.js';
import {call, all, put, takeLatest} from 'redux-saga/effects';
import CategoryActionTypes from './category.types';


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCollectionAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CategoryActionTypes.FETCH_CATEGORY_START, fetchCategoriesAsync);   
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}