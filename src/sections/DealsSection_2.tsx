import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import { DealsSectionType } from './DealsSection_1'

const DealsSection_2: React.FC<DealsSectionType>  = ({ items = []}) => {

  
    const {product, getAllProducts} = useProductContext() as ProductContextType
    useEffect(() => {
      getAllProducts(8)
    }, [])

    return (
        <section className="deals-section-2">
            <div className="flash-grid">
                <div className="container">
                    <div className="row row-cols-2 row-cols-md-2 row-cols-lg-2 row-cols-2 g-2">
                    {
                        items.map( item => <ProductCard key={product.articleNumber} item={product}/>)
                    }
                    </div>
                </div>
            </div>

            <div className="flash-sale">
                <div className="flash-info">
                    <h1>2 FOR USD $29</h1>
                    <button className="btn-light">
                        <div className="corner-left"></div>
                            FLASH SALE
                        <div className= "corner-right"></div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DealsSection_2