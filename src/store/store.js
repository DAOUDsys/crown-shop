import {compose, createStore, applyMiddleware} from 'redux';
import { rootReducer } from './root_reducer';

const loggerMiddleWare = (store) => (next) => (action) => {
    if(!action.type) return next(action);
    next(action);
}

const middlewares = [loggerMiddleWare]

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);