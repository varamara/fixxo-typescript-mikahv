import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModels'

export interface DealsSectionType {
  title: string
  items: ProductItem[]
}

const DealsSection: React.FC<DealsSectionType>  = ({ title, items}) => {

  return (
    <section className="deals-section-1">
      <div className="flash-sale">
          <div className="flash-info">
              <h1>{title}</h1>
              <button className="btn-light">
                  <div className="corner-left"></div>
                    FLASH SALE
                  <div className= "corner-right"></div>
              </button>
          </div>
      </div>

      <div className="flash-grid">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-2 row-cols-2 g-2">
            {
              items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default DealsSection