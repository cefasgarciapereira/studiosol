import { cloneElement } from 'react'
import classes from './page.module.css'

function Page(props) {
    const { head, children, bottom, ...rest } = props

    const Head = head;
    const Bottom = bottom;

    return (
        <main
            className={classes.root}
            {...rest}
        >
            {cloneElement(Head)}
            <div className={classes.children}>
                {children}
            </div>
            {cloneElement(Bottom)}
        </main>
    )
}

export default Page