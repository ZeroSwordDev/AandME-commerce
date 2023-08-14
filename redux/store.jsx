import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import detailProductSlice from './detailProduct/detailProductSlice'
import thunk from 'redux-thunk'
import  productSlice  from './products/productSlice'
import cartSlice from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    detailProduct: detailProductSlice,
    product: productSlice,
    cart: cartSlice
  },
  middleware: [...getDefaultMiddleware(), thunk],
})