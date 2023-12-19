import './Landing.css';
import Slide from './Bricks/Slide/Slide';
import Location from './Bricks/Location/Location';
import Instruccions from './Bricks/Instruccions/Instruccions';
import Title from './Bricks/Title/Title';

const Landing = () =>{
    return(
    <div className="Justifier">
        <Title/>
        <Slide/>
        <div className="Info__conteiner">
            <Instruccions/>
        </div>
        <Location/>
    </div>
    )
}

export default Landing