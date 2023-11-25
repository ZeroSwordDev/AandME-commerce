import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    manufactoring: [],
  loading: false,
  error: false,
};

export const manufactoringSlice = createSlice({
  name: "manufactoring",
  initialState,
  reducers: {
    // Reducer síncrono para actualizar el estado con los detalles del producto
    setGetallManufactoring: (state, action) => {
      state.manufactoring = action.payload;
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
  setGetallManufactoring,
  setLoading,
  setError,
} = manufactoringSlice.actions;

export const fetchGetAllManufactoring = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/manufacturing`);
    const data = await res.json();
    dispatch(setGetallManufactoring(data));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};



export default manufactoringSlice.reducer;
