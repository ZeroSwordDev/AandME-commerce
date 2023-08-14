import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Reducer síncrono para actualizar el estado con los detalles del producto
    setGetallProduct: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setGetallProduct, setLoading, setError } = productSlice.actions;

export const fetchGetAllProduct = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/products`);
    const data = await res.json();
    dispatch(setGetallProduct(data));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default productSlice.reducer;
