/*
Este componente configura a store 
através do agrupamento dos reducers.
*/

import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../features/game/gameSlice'

const store = configureStore({
    reducer: {
        game: gameReducer
    },
})

export default store