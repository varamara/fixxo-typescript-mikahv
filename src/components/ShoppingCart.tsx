import React from 'react'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { CartItem } from '../models/ShoppingCartModels'
import ShoppingCartItem, { ShoppingCartItemType } from './ShoppingCartItem'


const ShoppingCart: React.FC= () => {

    const { items } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <section className="product-grid">
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Product Details</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

            <div className="offcanvas-body">
                {
                    items.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
                }
            </div>
        </div>
    </section>
  )
}

export default ShoppingCart