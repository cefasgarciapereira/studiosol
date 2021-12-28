/*
Esta é a tela principal da aplicação, 
responsável por disparar a primeira chamada à API e renderizar os demais componentes.
*/

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNumber } from '@/redux/features/game/gameSlice'

import {
    Page,
    SevenSegmentsDisplay,
    AnswerForm
} from '@/components'
import Title from './Title'

import classes from './home.module.css'

function Home() {
    const game = useSelector(state => state.game)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNumber())
    }, [])

    const handleColor = () => game.error ? 'var(--danger)' : game.won ? 'var(--success)' : 'black'

    return (
        <Page
            head={<Title />}
            bottom={<AnswerForm />}
        >
            <div className={classes.content}>
                <h4 style={{ color: handleColor() }}>
                    {
                        game.error ? 'ERRO' :
                            game.loading ? 'Buscando número' :
                                game.won ? 'Você acertou!!!' :
                                    game.value > game.throb ? 'É maior' :
                                        'É menor'
                    }
                </h4>
                <SevenSegmentsDisplay
                    color={handleColor()}
                    value={game.error ? game.error.code : game.throb}
                />
                {
                    game.error &&
                    <h4 style={{ color: handleColor() }}>
                        {game.error.message}
                    </h4>
                }

            </div>
        </Page>
    )
}

export default Home