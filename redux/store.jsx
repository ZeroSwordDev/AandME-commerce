import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import detailProductSlice from './detailProduct/detailProductSlice'
import thunk from 'redux-thunk'
import  productSlice  from './products/productSlice'
import cartSlice from './cart/cartSlice'
import optionSlice from './options/optionSlice'
import  manufactoringSlice from './manufacturing/Manufacturing'
import  aditionalOptionSlice  from './aditionalOptions/aditionalOptionSlice'
import sizesSlice from './sizes/sizesSlice'
import uptimesSlice from './uptimes/uptimesSlice'

export const store = configureStore({
  reducer: {
    detailProduct: detailProductSlice,
    product: productSlice,
    cart: cartSlice,
    option: optionSlice,
    Manufactoring: manufactoringSlice,
    AditionalOptionSlice : aditionalOptionSlice,
    sizes : sizesSlice,
    uptime: uptimesSlice
  },
  middleware: [...getDefaultMiddleware(), thunk],
})