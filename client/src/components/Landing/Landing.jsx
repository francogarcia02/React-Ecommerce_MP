import './Landing.css';
import Slide from './Bricks/Slide/Slide';
import Instruccions from './Bricks/Instruccions/Instruccions';
import Title from './Bricks/Title/Title';
import { lazy, Suspense } from 'react';

const Location = lazy( () => import('./Bricks/Location/Location') )

const Landing = () =>{
    return(
    <div className="Justifier">
        <Title/>
        <Slide/>
        <div className="Info__conteiner">
            <Instruccions/>
        </div>
        <Suspense fallback={<h1>Cargando...</h1>}>
            <Location/>
        </Suspense>
    </div>
    )
}

export default Landing