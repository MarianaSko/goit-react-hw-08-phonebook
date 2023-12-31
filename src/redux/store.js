import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { phonebookReducer } from "./contacts/phonebookSlice"
import { authReducer } from "./auth/slice"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'auth',
    version: 1,
    storage,
    whitelist: ['token']
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const reducer = combineReducers({
    phonebook: phonebookReducer,
    auth: persistedReducer,
}
)
export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)
