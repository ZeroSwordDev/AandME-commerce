import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  detailsProduct: {},
  loading: false,
  error: false,
};

export const detailProductSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    // Reducer síncrono para actualizar el estado con los detalles del producto
    setDetailsProduct: (state, action) => {
      state.detailsProduct = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setDetailsProduct, setLoading , setError} = detailProductSlice.actions;

export const fetchDetailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/products/${productId}`);
    const data = await res.json();
    dispatch(setDetailsProduct(data));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default detailProductSlice.reducer;
