import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '@/api'

const initialState = {
    value: 0,
    throb: 0,
    loading: false,
    error: null,
    won: false
}

export const fetchNumber = createAsyncThunk(
    'game/fetchNumber',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.get('/?num=1&min=1&max=300&col=1&base=10&format=plain&rnd=new')
            return response.data
        } catch (err) {
            return rejectWithValue({
                name: err.response.name || 'Erro',
                message: err.response.message || 'Algo inesperado aconteceu',
                stack: err.response.stack | '',
                code: err.response.status || 404
            })
        }
    }
)

export const gameSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        submit: (state, action) => {
            state.throb = action.payload
            if (state.value === parseInt(action.payload)) {
                state.won = true
            } else {
                state.won = false
            }
            state.playAgain = true
        },
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNumber.pending, (state, action) => {
                if (!state.loading) {
                    state.loading = true
                    state.currentRequestId = action.meta.requestId
                }
            })
            .addCase(fetchNumber.fulfilled, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = false
                    state.error = false
                    state.value = action.payload
                    state.currentRequestId = undefined
                }
            })
            .addCase(fetchNumber.rejected, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = false
                    state.error = action.payload
                    state.currentRequestId = undefined
                }
            })
    },
})

export const { submit, reset } = gameSlice.actions

export default gameSlice.reducer