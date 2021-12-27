import Digit from './Digit'

import classes from './seve-segment-display.module.css'

function SevenSegmentsDisplay(props) {
    const { value, color } = props

    return (
        <div className={classes.root}>
            {
                value
                    .toString()
                    .split('')
                    .map((d, index) =>
                        <Digit
                            color={color}
                            value={parseInt(d)}
                            key={index}
                        />)
            }
        </div>
    )
}

export default SevenSegmentsDisplay