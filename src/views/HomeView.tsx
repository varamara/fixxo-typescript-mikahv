import React, {useContext, useEffect} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import DealsSection from '../sections/DealsSection_1'
import DealsSection_2 from '../sections/DealsSection_2'
import SupportSection from '../sections/SupportSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import { ProductsContext } from '../contexts/contexts'
import { ProductItem } from '../models/ProductModels'

export interface HomeViewType {
  item: ProductItem
}

const HomeView: React.FC<HomeViewType>  = ({item}) => {

  document.title = 'Fixxo.'

  const {featuredProducts, getFeaturedProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeaturedProducts(8)
  }, [])
  

  return (
    <>
    <header>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Home"/>
      <ShowcaseSection />
    </header>
    <ProductGridSection title="Featured Products" items={featuredProducts}/>
    <TopPicksSection />
    <DealsSection title= {item.name} items={featuredProducts}/>
    <DealsSection_2 title= {item.name}items={featuredProducts}/>
    <SupportSection />
    <FooterSection />
    </>
  )
}

export default HomeView