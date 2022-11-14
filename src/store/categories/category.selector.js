import {createSelector} from 'reselect';

const selectCategoryReducer = (state) => state.category;


export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
    );
    
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        console.log('inside select category map')
        return categories.reduce((acc, category) => {
        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})}
    );
    
    // export const selectCategoriesMap = (state) => state.category.categories
    // .reduce((acc, category) => {
        //     const {title, items} = category;
        //     acc[title.toLowerCase()] = items;
        //     return acc;
        //     },{});



    export const selectLoadingState = createSelector(
        [selectCategoryReducer],
        (categoriesSlice) => categoriesSlice.isLoading
    )

