import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sizes: [],
  loading: false,
  error: false,
};

export const sizesSlice = createSlice({
  name: "sizes",
  initialState,
  reducers: {
    setGetallSizes: (state, action) => {
      state.sizes = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setGetAddSizes: (state, action) => {
      state.sizes = [...state.sizes, action.payload];
    },
    setDeleteSizes: (state, action) => {
      state.sizes = state.sizes.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setDeleteSizes,
  setGetAddSizes,
  setGetallSizes,
  setLoading,
  setError,
} = sizesSlice.actions;

export const fetchGetAllSizes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/sizes`);
    const data = await res.json();
    dispatch(setGetallSizes(data));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchGetAddSizes = (data) => async (dispatch) => {
  console.log(data)
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/sizes`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const resposne = await res.json();
    dispatch(setGetAddSizes(resposne));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchDeleteSizes = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/sizes/${id}`, {
      method: "DELETE",
    });

    await res.json();
    dispatch(setDeleteSizes(id));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default sizesSlice.reducer;
