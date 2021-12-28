/*
O componente Digit espera um valor como props. O componente se trata
do agrupamento de 7 divs que representam os segmentos. O segmento estará 
"ligado" ou "desligado" de acordo com um array de configuração. Isto é, 
para o segmento A, o valor recebido como props deverá estar contido no array "AOn", 
que indica os valores cujo o display A deverá estar ligado. Logo, se o valor recebido for "2",
o segmento A estará ligado, pois "2" está contido no array "AOn". Entretanto, caso o valor 
recebido seja 4, o segmento A NÃO estará ligado, pois este valor não está contido no array "AOn".
Ainda, quando ligado, o segmento pode receber uma cor específica como props ou então ele será
ligado com uma cor padrão.
*/

import classes from './digit.module.css'

function Digit(props) {
    const { value, color } = props

    return (
        <div className={classes.root}>
            <div className={classes.A} style={{ backgroundColor: AOn.includes(value) ? color ? color : '#262A34' : '' }}></div>
            <div className={classes.B} style={{ backgroundColor: BOn.includes(value) ? color ? color : '#262A34' : '' }}></div>
            <div className={classes.C} style={{ backgroundColor: COn.includes(value) ? color ? color : '#262A34' : '' }}></div>
            <div className={classes.D} style={{ backgroundColor: DOn.includes(value) ? color ? color : '#262A34' : '' }}></div>
            <div className={classes.E} style={{ backgroundColor: EOn.includes(value) ? color ? color : '#262A34' : '' }}></div>
            <div className={classes.F} style={{ backgroundColor: FOn.includes(value) ? color ? color : '#262A34' : '' }}></div>
            <div className={classes.G} style={{ backgroundColor: GOn.includes(value) ? color ? color : '#262A34' : '' }}></div>
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

export default Digit