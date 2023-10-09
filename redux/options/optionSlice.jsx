import { createSlice } from "@reduxjs/toolkit";

const initialState = {
options: [],
  loading: false,
  error: false,
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setGetallOptions: (state, action) => {
      state.options = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setGetallOptions, setLoading, setError } = optionsSlice.actions;

export const fetchGetAllOptions = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/options`);
    const data = await res.json();
    dispatch(setGetallOptions(data));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default optionsSlice.reducer;