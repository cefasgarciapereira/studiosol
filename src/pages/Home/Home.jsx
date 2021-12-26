import { SevenSegmentsDisplay } from '@/components'
import classes from './home.module.css'

function Home() {
    return (
        <div className={classes.root}>
            <h1>Qual é o número?</h1>

            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h4>é menor</h4>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <SevenSegmentsDisplay value={9} />
                    <SevenSegmentsDisplay value={4} />
                </div>
            </div>

            <form>
                <button>nova partida</button><br />
                <input placeholder='Digite o palpite' type="numeric" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Home