import cartSlice from '../features/cart/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from '../services/shopApi'
import shopSlice from '../features/shop/shopSlice'

const store = configureStore({
    reducer: {
        shop: shopSlice,
        cart: cartSlice,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)

export default store