import { createContext, useState, useEffect } from "react";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const catergoryMap = await getCollectionAndDocuments();
            setcategoriesMap(catergoryMap);
        }
        getCategoriesMap();
    },[]);

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};
