import classes from './answer-form.module.css'

function AnswerForm() {
    return (
        <div className={classes.root}>
            <button>nova partida</button>
            <form>
                <input placeholder='Digite o palpite' type="numeric" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AnswerForm