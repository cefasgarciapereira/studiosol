/*
O SevenSegmentDisplay é um componente reutilizável que recebe um valor como props
e percorre cada dígito deste valor repassando-o como props para o componente Digit, 
responsável por renderizar um valor numérico (0 a 9) em formato de display 7 segmentos.
*/

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