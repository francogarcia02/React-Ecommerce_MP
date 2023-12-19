import './Navbar.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { Search } from 'react-bootstrap-icons';
import {search} from '../../helpers/search-link.js';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const {user, userExist} = useContext(UserContext)
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        const link = search(inputValue)
        navigate('/menu/' + link);
    };

    const exist = userExist()


    return(
        <div>
            <header>
                <nav className="Navbar background">
                    <Link to="/" className="Navbar__landing color-txt">Home</Link>
                    <Link to="/menu" className="Navbar__item color-txt" >Catalogo</Link>
                    <CartWidget/>
                    <div className="Search__grid">
                        <input className="p-2 Search__input" type="text" placeholder="Buscar productos" value={inputValue} onChange={handleInputChange}/>
                        <button className="btn btn-dark " onClick={handleButtonClick}><Search/></button>
                    </div>
                    {(exist) ?
                    <Link to="/" className="Navbar__obj Navbar__obj_register color-txt">{user.nombre} {user.apellido}</Link>
                    :
                    <>
                    <Link to="/login" className="Navbar__obj Navbar__obj_login color-txt" >Iniciar sesion</Link>
                    <Link to="/register" className="Navbar__obj Navbar__obj_register color-txt">Registrarse</Link>
                    </>
                    }
                </nav>
            </header>
        </div>
    );
};

export default Navbar