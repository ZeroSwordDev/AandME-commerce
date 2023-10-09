import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aditionalOptions: [],
  loading: false,
  error: false,
};

export const aditionalOptionSlice = createSlice({
  name: "manufactoring",
  initialState,
  reducers: {
    // Reducer síncrono para actualizar el estado con los detalles del producto
    setGetallAditionalOptionSlice: (state, action) => {
      state.aditionalOptions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setGetallAditionalOptionSlice,
  setLoading,
  setError,
} = aditionalOptionSlice.actions;

export const fetchGetAllAditionalOptions = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/othersOptions`);
    const data = await res.json();
    dispatch(setGetallAditionalOptionSlice(data));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};



export default aditionalOptionSlice.reducer;
