import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import detailProductSlice from './detailProduct/detailProductSlice'
import thunk from 'redux-thunk'
import  productSlice  from './products/productSlice'
import cartSlice from './cart/cartSlice'
import optionSlice from './options/optionSlice'

export const store = configureStore({
  reducer: {
    detailProduct: detailProductSlice,
    product: productSlice,
    cart: cartSlice,
    option: optionSlice
  },
  middleware: [...getDefaultMiddleware(), thunk],
})