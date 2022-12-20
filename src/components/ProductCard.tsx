import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { ProductItem } from '../models/ProductModels'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface ProductCardType {
    item: ProductItem
}

const ProductCard: React.FC<ProductCardType> = ({item}) => {
    const { increment } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={item.imageName} alt={item.name} />
                <div className="card-menu">
                    {/* Denna borde egentligen visa en separat offCanvas från den som finns till shoppingbag */}
                    <button onClick={() => 
                        increment({articleNumber: item.articleNumber, product: item, quantity: 1})} 
                        className="menu-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={() => 
                        increment({articleNumber: item.articleNumber, product: item, quantity: 1})} 
                        className="menu-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <i className="fa-regular fa-bag-shopping"></i>
                    </button>
                </div>
                <Link to={`/products/${item.articleNumber}`} className="btn-theme btn-card-theme">
                    <span className="corner-left"></span>
                    <span className="corner-right"></span>
                    <p>QUICK VIEW</p>
                </Link>
            </div>
            <div className="card-body">
                <p className="card-category">{item.category}</p>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                </p>
                <p className="card-price">{currencyFormatter(item.price)}</p>   
            </div>
        </div>
    </div>
  )
}

export default ProductCard

function useShoppingCart(): { incrementQuantity: any } {
    throw new Error('Function not implemented.')
}
