import './Landing.css'
import Info from './Bricks/Info/Info'
import Location from './Bricks/Location/Location'
import Instruccions from './Bricks/Instruccions/Instruccions'
import Title from './Bricks/Title/Title'

const Landing = () =>{
    return(
    <div className="Justifier">
        <Title/>
        <div className="Info__conteiner">
            <Info/>
            <Instruccions/>
        </div>
        <Location/>
    </div>
    )
}

export default Landing