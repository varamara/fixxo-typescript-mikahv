import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModels'

interface ProductDetailsType {
  title: string
  item:  ProductItem
}

const itemDetailsSection: React.FC<ProductDetailsType>  = ({title, item}) => {
  return (

  <section className="product-grid">
    <div className="container">
        <div className="card w-25">
          <h1>{title}</h1>
            <ProductCard key={item.articleNumber} item={item} />
        </div>
    </div>
  </section>
  )
}

export default itemDetailsSection

