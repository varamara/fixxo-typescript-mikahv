import React, {  useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import { useProductContext, ProductContextType } from '../contexts/ProductContext'

const ProductsView: React.FC  = () => {

  document.title = 'Products | Fixxo.'

  const {allProducts, getAllProducts} = useProductContext() as ProductContextType
  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products"/>
    <ProductGridSection title="Products" items={allProducts} />
    <FooterSection />
    </>
  )
}

export default ProductsView