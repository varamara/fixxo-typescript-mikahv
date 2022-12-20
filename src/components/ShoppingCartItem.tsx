import React from 'react'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { CartItem } from '../models/ShoppingCartModels'
import { currencyFormatter } from '../utilities/currencyFormatter'

export interface ShoppingCartItemType {
    item: CartItem
}

const ShoppingCartItem: React.FC<ShoppingCartItemType>= ({item}) => {
    const { increment, decrement, remove} = useShoppingCartContext() as ShoppingCartContextType

  return (
    <div className="shoppingcart-item">
        <div className="item-image">
            <img src={item.product.imageName} alt={item.product.name} />
        </div>
        <div className="item-info">
            <div className="item-info-name">{item.product.name}</div>
            <div className="item-price">
                <div>{currencyFormatter(item.product.price * item.quantity)}</div>
            </div>
            <div className="line"></div>
            <div className="item-info-quantity-box">
                <button className="box-button-left" onClick={() => decrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button className="box-button-right" onClick={() => increment(item)}>+</button>
                <button onClick={() => remove(item.articleNumber)}><i className="trash fa-solid fa-trash"></i></button>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCartItem