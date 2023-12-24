import './ItemList.css';
import Item from './Item/Item';
import { lazy, Suspense } from 'react';

const ItemList = ({productos, titulo}) =>{
    const Item = lazy( () => import('./Item/Item') )

    return(
        <div className="supCont">
            <h1 className="menu__title">{titulo}</h1>
            <div className="contMenu color-txt">
                {productos && productos.map(prod => (
                    <Suspense>
                        <Item {...prod}/>
                    </Suspense>
                ))}
                {productos && productos.map(prod => (
                    <Suspense>
                        <Item {...prod}/>
                    </Suspense>
                ))}
            </div>
        </div>
    )
}

export default ItemList