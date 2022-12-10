import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModels'

interface ProductDetailsType {
  title: string
  items: ProductItem[]
}

const itemDetailsSection: React.FC<ProductDetailsType>  = ({items}) => {
  return (
    <div className="details-section">
      <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* {
            items.map( product => <ProductCard key={product.articleNumber} item={product} />)
          } */}
        </div>
    </div>
  )
}

export default itemDetailsSection