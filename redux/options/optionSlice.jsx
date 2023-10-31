import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: [],
  optionsProducts: [],
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
    setGetAddOptions: (state, action) => {
      state.options = [...state.options, action.payload];
    },
    setDeleteOptions: (state, action) => {
      state.options = state.options.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setDeleteOptions,
  setGetAddOptions,
  setGetallOptions,
  setLoading,
  setError,
} = optionsSlice.actions;

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

export const fetchGetOneOption = (arr) => async (dispatch) => {
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

export const fetchGetAddOptions = (data) => async (dispatch) => {
  console.log(data);
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/options`, {
      method: "POST",
      body: JSON.stringify({...data}),
    });

    const resposne = await res.json();
    console.log(resposne);
    dispatch(setGetAddOptions(resposne));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchDeleteOptions = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/options/${id}`, {
      method: "DELETE",
    });

    await res.json();
    dispatch(setDeleteOptions(id));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default optionsSlice.reducer;
