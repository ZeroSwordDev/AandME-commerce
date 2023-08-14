import { Alert } from "@material-tailwind/react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  loading: false,
  error: false,
};

export const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Reducer síncrono para actualizar el estado con los detalles del producto
    setGetallCart: (state, action) => {
      const find = state.cart.find((p) => p._id === action.payload._id);
      if (!find) {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      } else {
        find.quantity++;
      }
    },
    addCartOne: (state, action) => {
      const find = state.cart.find((p) => p._id === action.payload._id);
      find ? (find.quantity < 10 ? find.quantity++ : null) : null;
    },
    deleteCartOne: (state, action) => {
      const find = state.cart.find((p) => p._id === action.payload);

      find
        ? find.quantity > 1
          ? find.quantity--
          : (state.cart = state.cart.filter((p) => p._id !== find._id))
        : null;
    },
    removeCartAll: (state, action) => {
      state.cart = []
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setGetallCart,
  addCartOne,
  deleteCartOne,
  setLoading,
  setError,
  removeCartAll
} = cartSlice.actions;

export const fetchGetAllCart = (product) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setGetallCart(product));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteOneCart = (id) => async (dispatch) => {
  try {
    console.log(id);
    dispatch(deleteCartOne(id));
  } catch (error) {
    console.log(error);
  }
};

export const addOneCart = (product) => async (dispatch) => {
  try {
    dispatch(addCartOne(product));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  }
};

export const removeAllCart = () => async (dispatch) => {
  try {
    dispatch(removeCartAll());
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  }
};

export default cartSlice.reducer;
