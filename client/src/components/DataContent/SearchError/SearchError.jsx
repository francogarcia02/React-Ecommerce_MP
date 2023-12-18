import './SearchError.css';
import {ExclamationTriangle} from 'react-bootstrap-icons';

const SearchError = () =>{
    return(
        <div className="Justifier">
            <ExclamationTriangle/>
            <h1>articulo no encontrado</h1>
        </div>
    )
}

export default SearchError