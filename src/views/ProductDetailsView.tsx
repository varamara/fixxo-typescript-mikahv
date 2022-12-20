import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import { useParams } from 'react-router-dom'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

// Jag förstår ungefär hur detta skulle kunna göras men vet inte alls hur jag ska implementera det.
// Ska man mappa item i ProductDetailsSection eller?

const ProductDetailsView: React.FC  = () => {
    const {id} = useParams<string>()
    const {product, getProduct } = useProductContext() as ProductContextType

    useEffect(() => {
      getProduct(id)
    }, [])

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Product"/>
    <ProductDetailsSection item = {product} title= {product.name}/>
    <FooterSection />
    </>
  )
}

export default ProductDetailsView
