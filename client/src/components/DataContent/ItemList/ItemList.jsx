import './ItemList.css'

import Item from './Item/Item'

const ItemList = ({productos, titulo}) =>{
    return(
    <div className="contMenu">
        <h1 className="menu__title">{titulo}</h1>
        {productos && productos.map(prod => (
            <Item key={prod.id} prod={prod}/>
        ))}
    </div>
    )
}

export default ItemList