
export enum CategoryActionTypes  {
    FETCH_CATEGORY_START = 'FETCH_CATEGORY_START',
    FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS',
    FETCH_CATEGORY_FAILED = 'FETCH_CATEGORY_FAILED',
};

export type CategoryItem = {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
}

export type Category = {
    title: string;
    items: CategoryItem[];
}

export type CategoryMap = {
    [key: string]: CategoryItem[];
}