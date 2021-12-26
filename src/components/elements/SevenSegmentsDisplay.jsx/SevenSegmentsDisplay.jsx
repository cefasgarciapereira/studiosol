import classes from './SevenSegmentsDisplay.module.css'

function SevenSegmentsDisplay(props) {
    const { value } = props

    return (
        <div className={classes.root}>
            <div className={classes.A} style={{ backgroundColor: AOn.includes(value) ? '#262A34' : '' }}></div>
            <div className={classes.B} style={{ backgroundColor: BOn.includes(value) ? '#262A34' : '' }}></div>
            <div className={classes.C} style={{ backgroundColor: COn.includes(value) ? '#262A34' : '' }}></div>
            <div className={classes.D} style={{ backgroundColor: DOn.includes(value) ? '#262A34' : '' }}></div>
            <div className={classes.E} style={{ backgroundColor: EOn.includes(value) ? '#262A34' : '' }}></div>
            <div className={classes.F} style={{ backgroundColor: FOn.includes(value) ? '#262A34' : '' }}></div>
            <div className={classes.G} style={{ backgroundColor: GOn.includes(value) ? '#262A34' : '' }}></div>
        </div>
    )
}

const AOn = [0, 2, 3, 5, 6, 7, 8, 9]
const BOn = [0, 1, 2, 3, 4, 7, 8, 9]
const COn = [0, 1, 3, 4, 5, 6, 7, 8, 9]
const DOn = [0, 2, 3, 5, 6, 8, 9]
const EOn = [0, 2, 6, 8]
const FOn = [0, 4, 5, 6, 8, 9]
const GOn = [2, 3, 4, 5, 6, 8, 9]

export default SevenSegmentsDisplay