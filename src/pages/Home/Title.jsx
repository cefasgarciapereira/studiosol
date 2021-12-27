import { Divider } from '@/components'
import classes from './home.module.css'

function Title() {
    return (
        <div className={classes.title}>
            <h1>Qual é o número?</h1>
            <Divider />
        </div>
    )
}

export default Title