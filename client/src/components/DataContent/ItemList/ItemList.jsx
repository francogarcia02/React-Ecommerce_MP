import './ItemList.css'

import Item from './Item/Item'

const ItemList = ({productos, titulo}) =>{
    return(
    <div className="supCont">
        <h1 className="menu__title">{titulo}</h1>
        <div className="contMenu">
            {productos && productos.map(prod => (
                <Item key={prod.id} prod={prod}/>
            ))}
        </div>
    </div>
    )
}

export default ItemList