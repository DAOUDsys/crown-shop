import CategoryActionTypes from './category.types.js'

export const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};

export const CategoryReducer = (state = INITIAL_STATE,action) => {
    const {type, payload} = action;

    switch(type) {
        case CategoryActionTypes.FETCH_CATEGORY_START:
            console.log('inside start')
            return {
                ...state,
                isLoading: true,
            }
            case CategoryActionTypes.FETCH_CATEGORY_SUCCESS:
                return {
                    ...state,
                    categories: payload,
                    isLoading: false,
                }
            case CategoryActionTypes.FETCH_CATEGORY_FAILED:
                return {
                    ...state,
                    error: payload,
                    isLoading: false,
                }
            default: return state;
    }
}