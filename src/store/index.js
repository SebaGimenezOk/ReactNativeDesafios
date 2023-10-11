import cartSlice from '../features/cart/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../services/shopApi'
import shopSlice from '../features/shop/shopSlice'
import { AuthApi } from '../services/authApi'
import authSlice from '../features/auth/authSlice'

const store = configureStore({
    reducer: {
        shop: shopSlice,
        cart: cartSlice,
        auth: authSlice,
        [shopApi.reducerPath]: shopApi.reducer,
        [AuthApi.reducerPath]:AuthApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(shopApi.middleware, AuthApi.middleware),
})

setupListeners(store.dispatch)

export default store