import Digit from './Digit'

import classes from './seve-segment-display.module.css'

function SevenSegmentsDisplay(props) {
    const { value } = props

    return (
        <div className={classes.root}>
            {
                value
                    .toString()
                    .split('')
                    .map((d, index) =>
                        <Digit value={parseInt(d)} key={index} />)
            }
        </div>
    )
}

export default SevenSegmentsDisplay