import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uptimes: [],
  loading: false,
  error: false,
};

export const uptimesSlice = createSlice({
  name: "uptimes",
  initialState,
  reducers: {
    setGetallUptimes: (state, action) => {
      state.uptimes = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setGetAddUptimes: (state, action) => {
      state.uptimes = [...state.uptimes, action.payload];
    },
    setDeleteUptimes: (state, action) => {
      state.uptimes = state.uptimes.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setDeleteUptimes,
  setGetAddUptimes,
  setGetallUptimes,
  setLoading,
  setError,
} = uptimesSlice.actions;

export const fetchGetAllUptimes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/uptime`);
    const data = await res.json();
    dispatch(setGetallUptimes(data));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchGetAddUptimes = (data) => async (dispatch) => {
  console.log(data)
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/uptime`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const resposne = await res.json();
    dispatch(setGetAddUptimes(resposne));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchDeleteUptimes = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await fetch(`/api/uptime/${id}`, {
      method: "DELETE",
    });

    await res.json();
    dispatch(setDeleteUptimes(id));
  } catch (error) {
    dispatch(setError(true));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default uptimesSlice.reducer;
