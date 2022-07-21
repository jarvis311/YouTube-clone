import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: []
}
export const createslice = createSlice({
    name: 'searchdata',
    initialState,
    reducers: {
        search: (state, action) => {
            state.search = action.payload;
        }

    }
})

export const { search } = createslice.actions;

export default createslice.reducer;
