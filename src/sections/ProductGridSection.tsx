import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import { ProductItem } from '../models/ProductModels'

interface ProductGridType {
  title: string
  items: ProductItem[]
}

const ProductGridSection: React.FC<ProductGridType>  = ({title, items = []}) => {

  const {product, getAllProducts} = useProductContext() as ProductContextType
  useEffect(() => {
    getAllProducts(8)
  }, [])

  return (
    <section className="product-grid">
      <div className="container">
        <h1>{title}</h1>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {
              items.map( item => <ProductCard key={product.articleNumber} item={product} />)
            }
          </div>
      </div>  
    </section>
  )
}

export default ProductGridSection

// Nu använder inte denna take utan articleNumber vilket antagligen är fel, lika så gör dealsektionen. Fixa till detta.