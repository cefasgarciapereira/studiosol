import {
    Page,
    SevenSegmentsDisplay,
    AnswerForm
} from '@/components'
import Title from './Title'

import classes from './home.module.css'

function Home() {
    return (
        <Page
            head={<Title />}
            bottom={<AnswerForm />}
        >
            <div className={classes.content}>
                <h4>é menor</h4>
                <SevenSegmentsDisplay value={8} />
            </div>
        </Page>
    )
}

export default Home