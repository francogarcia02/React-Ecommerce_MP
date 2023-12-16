import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () =>{
    return(
        <footer className="footer-class">
            <div className="contacto-atencion">
                <h4 className="contacto__titulo">Atencion al cliente</h4>
                <h5 className="contacto__item">+54 9 351 222 2233</h5>
                <h5 className="contacto__item">MegaBurguers@gmail.com</h5>
            </div>
            <div className="contacto-franquicia">
                <h4 className="contacto__titulo">¡Conviertete en franquicia!</h4>
                <h5 className="contacto__item">MegaFranquicias@gmail.com</h5>
            </div>
            <div className="redes">
                <h4 className="contacto__titulo" >Nuestras redes</h4>
                <div className="redes__contenedor">
                    <Link to=""><img className="redes__logo" src="../../../assets/img/logos/instagram.png" alt="instagram-icon"/></Link>
                    <Link to=""><img className="redes__logo" src="../../../assets/img/logos/facebook.png" alt="facebook-icon"/></Link>
                    <Link to=""><img className="redes__logo" src="../../../assets/img/logos/twitter.png" alt="twitter-icon"/></Link>
                </div>
            </div>
            <div className="whatsapp">
                <a href="https://wa.me/3512290552"><img class="whatsapp_logo" src="../../../assets/img/logos/whatsapp.png" alt="wsp-icon"/></a>
            </div>
        </footer>
    )
}

export default Footer