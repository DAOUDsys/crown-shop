import {compose, createStore, applyMiddleware, Middleware} from 'redux';
import { rootReducer } from './root_reducer';
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const loggerMiddleWare:Middleware<{}, RootState> = (store) => (next) => (action) => {
    if(!action.type) return next(action);
    next(action);
};

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
}

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV === 'development' && loggerMiddleWare,thunk]
.filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);