import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cloudApi } from './cloud'

export const store = configureStore({
    reducer: {
        formStore: formReducer,
        [cloudApi.reducerPath]: cloudApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cloudApi.middleware),

})

setupListeners(store.dispatch)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch