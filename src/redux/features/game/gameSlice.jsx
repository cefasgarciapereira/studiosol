/*
Este arquivo define uma "slice" da store, composta por actions e reducers.
Toda a parte lógica do jogo está contida nesse arquivo e fica disponível de forma global
à aplicação.
*/

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '@/api'

const initialState = {
    value: 0,
    throb: 0,
    loading: false,
    error: null,
    won: false
}

/** Função responsável por buscar um novo número aleatório através da api  */
export const fetchNumber = createAsyncThunk(
    'game/fetchNumber',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.get('/rand?min=1&max=300')
            return response.data.value
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
            /** Função responsável por tratar 
             *a resposta do usuário.
             Retorna um erro, caso não seja valor numérico ou então
             verifica a igualdade dos valores.  */

            state.throb = action.payload

            if (action.payload.replace(/\D/g, '') === '') {
                state.error = {
                    code: 422,
                    name: 'Entidade não processável',
                    essage: 'Informe apenas valores numéricos'
                }
                return
            }

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
                /** estado de loading da chamada à api  */

                if (!state.loading) {
                    state.loading = true
                    state.currentRequestId = action.meta.requestId
                }
            })
            .addCase(fetchNumber.fulfilled, (state, action) => {
                /** estado de sucesso  */

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
                /** estado de erro  */

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