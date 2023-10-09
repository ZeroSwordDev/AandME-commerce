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
    setUpdateProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    setDeleteProducts: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    setChangeProducts: (state,action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    }
  },
});

export const {
  setChangeProducts,
  setUpdateProducts,
  setDeleteProducts,
  setGetallProduct,
  setLoading,
  setError,
} = productSlice.actions;

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

export const fetchAddProduct = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/products`, {
      method: "POST",
      body: JSON.stringify({ ...data, price: Number(data.price) }),
    });
    const respose = await res.json();
    dispatch(setUpdateProducts(respose));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchDeleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
     await res.json();
    dispatch(setDeleteProducts(id));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};


export const fetchUpdateProduct = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
     await res.json();
    dispatch(setChangeProducts(id));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};


export default productSlice.reducer;
