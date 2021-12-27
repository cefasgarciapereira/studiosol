import { useSelector, useDispatch } from 'react-redux'
import { fetchNumber, submit, reset } from '@/redux/features/game/gameSlice'

import classes from './answer-form.module.css'

function AnswerForm() {
    const game = useSelector(state => state.game)
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        dispatch(submit(formData.get('number')))
    }

    function playAgain() {
        dispatch(reset())
        dispatch(fetchNumber())
    }

    return (
        <div className={classes.root}>
            {
                (game.won || game.error) &&
                <button onClick={playAgain}>nova partida</button>
            }
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Digite o palpite'
                    type="numeric"
                    name="number"
                    maxLength={3}
                    disabled={game.error || game.won}
                />
                <input
                    type="submit"
                    disabled={game.error || game.won}
                />
            </form>
        </div>
    )
}

export default AnswerForm