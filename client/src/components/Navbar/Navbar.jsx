import './Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {

    const {user, userExist} = useContext(UserContext)

    const exist = userExist()


    return(
        <div>
            <header>
                <nav className="Navbar">
                    <Link to="/" className="Navbar__landing">Home</Link>
                    <Link to="/menu" className="Navbar__item" >Catalogo</Link>
                    <CartWidget/>
                    {(exist) ?
                    <Link to="/" className="Navbar__obj Navbar__obj_register">{user.nombre} {user.apellido}</Link>
                    :
                    <>
                    <Link to="/login" className="Navbar__obj Navbar__obj_login" >Iniciar sesion</Link>
                    <Link to="/register" className="Navbar__obj Navbar__obj_register">Registrarse</Link>
                    </>
                    }
                </nav>
            </header>
        </div>
    );
};

export default Navbar