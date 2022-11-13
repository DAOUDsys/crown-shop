import {createSelector} from 'reselect';

const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
        },{})
);

// export const selectCategoriesMap = (state) => state.category.categories
// .reduce((acc, category) => {
//     const {title, items} = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//     },{});