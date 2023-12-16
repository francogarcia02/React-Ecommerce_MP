import './Location.css'

const Location = () =>{
    return(
        <div className="ubicacion">
            <h2 className="ubicacion__title">¿Donde estamos?</h2>
            <iframe className="ubicacion__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.1463695522015!2d-64.18678173049061!3d-31.425544998391093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28fa868a349%3A0xce26aee0936183dc!2sAv.%20Hip%C3%B3lito%20Yrigoyen%20421%2C%20X5000%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1695567734345!5m2!1ses-419!2sar" width="600" height="450" loading="lazy"/>
        </div>
    )
}

export default Location

