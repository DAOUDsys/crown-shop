import CategoryActionTypes from './category.types.js'

export const INITIAL_STATE = {
    categories: []
};

export const CategoryReducer = (state = INITIAL_STATE,action) => {
    const {type, payload} = action;

    switch(type) {
        case CategoryActionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            }
        default: return state;
    }
}