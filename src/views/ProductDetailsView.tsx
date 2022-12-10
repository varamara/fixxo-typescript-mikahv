import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import { ProductItem } from '../models/ProductModels'


const ProductDetailsView: React.FC  = () => {
    const {id} = useParams<string>()
    const {product, getProduct} = useProductContext() as ProductContextType

    useEffect(() => {
      getProduct(id)
    }, [])

  return (
    <>
    <MainMenuSection />
    {/* <BreadcrumbSection parentPage="Products" currentPage={ProductContext.product.name}/> */}
    {/* <ProductDetailsSection title= "Product title" item={product}/> */}
    <FooterSection />
    </>
  )
}

export default ProductDetailsView