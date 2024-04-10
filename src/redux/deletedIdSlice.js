import { createSlice } from '@reduxjs/toolkit';

const deletedIdSlice = createSlice({
  name: 'deletedId',
  initialState: '',
  reducers: {
    setId(state, action) {
      return action.payload;
    },
  },
});

export const { setId } = deletedIdSlice.actions;

export const deletedIdReducer = deletedIdSlice.reducer;

export const getDeletedId = state => state.deletedId;
