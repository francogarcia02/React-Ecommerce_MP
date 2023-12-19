import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () =>{
    return(
        <footer className="footer-class">
            <div className="contacto-atencion">
                <h4 className="h4 p-1">Atencion al cliente</h4>
                <p className="p-2 m-0">+54 9 351 234 5678</p>
                <p className="p-2 m-0">MegaBurguers@gmail.com</p>
            </div>
            <div className="contacto-franquicia">
                <h4 className="h3 p-1">¡Conviertete en franquicia!</h4>
                <p className="p-2 m-0">MegaFranquicias@gmail.com</p>
            </div>
            <div className="redes">
                <h4 className="h4 p-1 m-0" >Nuestras redes</h4>
                <div className="redes__contenedor">
                    <Link to=""><img className="redes__logo" src="../../../assets/img/logos/instagram.png" alt="instagram-icon"/></Link>
                    <Link to=""><img className="redes__logo" src="../../../assets/img/logos/facebook.png" alt="facebook-icon"/></Link>
                    <Link to=""><img className="redes__logo" src="../../../assets/img/logos/twitter.png" alt="twitter-icon"/></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer