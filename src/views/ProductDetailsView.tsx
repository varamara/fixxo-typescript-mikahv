import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailsView: React.FC  = () => {
    const {id} = useParams<string>()
    const ProductContext = useProductContext() as ProductContextType

    useEffect(() => {
      ProductContext.getProduct(id)
    }, [])

  return (
    <>
    <MainMenuSection />
    {/* <BreadcrumbSection parentPage="Products" currentPage={ProductContext.product.name}/> */}
    <ProductDetailsSection item={ProductContext.product}/>
    <FooterSection />
    </>
  )
}

export default ProductDetailsView