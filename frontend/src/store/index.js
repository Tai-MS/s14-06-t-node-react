import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import authReducer from './auth/authSlice';
import empleadosReducer from './empleados/empleadosSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

const persistConfig ={
    key:'root',
    storage,
    whitelist: ['authState', 'empleadosState']
}

const rootReducer = combineReducers({
    authState: authReducer,
    empleadosState: empleadosReducer
})
const persistedReducer= persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store);