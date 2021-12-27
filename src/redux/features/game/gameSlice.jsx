import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
}

export const gameSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {}
})

export default gameSlice.reducer