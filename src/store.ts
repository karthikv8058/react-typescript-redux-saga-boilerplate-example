
import { createStore,applyMiddleware,compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootSaga from './rootSaga';
import rootReducer, { RootState } from './rootReducer';


const config = {
 key: 'root',
 storage: storage,
 blacklist:['amouletReducer','orderDetailsReducer']
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const persistedReducer = persistReducer<RootState>(config, rootReducer);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig: any = { enhancers };
const store: any = createStore(persistedReducer, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {

});

sagaMiddleware.run(rootSaga);

export {store,persistor}