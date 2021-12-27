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

    console.log(game)

    return (
        <Page
            head={<Title />}
            bottom={<AnswerForm />}
        >
            <div className={classes.content}>
                <h4
                    style={{
                        color: game.error ? 'var(--danger)' :
                            game.won ? 'var(--success)' :
                                'black'
                    }}
                >
                    {
                        game.error ? 'Erro' :
                            game.loading ? 'Carregando' :
                                game.won ? 'Você acertou!!!' :
                                    game.value > game.throb ? 'É maior' :
                                        'É menor'
                    }
                </h4>
                <SevenSegmentsDisplay
                    color={
                        game.error ? 'var(--danger)' :
                            game.won ? 'var(--success)' :
                                'black'
                    }
                    value={game.error ? game.error.code : game.throb}
                />
            </div>
        </Page>
    )
}

export default Home