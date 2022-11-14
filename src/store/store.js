import {compose, createStore, applyMiddleware} from 'redux';
import { rootReducer } from './root_reducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const loggerMiddleWare = (store) => (next) => (action) => {
    if(!action.type) return next(action);
    next(action);
};

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV === 'development' && loggerMiddleWare,thunk].filter(Boolean);

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);