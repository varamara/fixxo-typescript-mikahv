import React, {useEffect} from 'react'
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


const HomeView: React.FC = () => {
  
  document.title = 'Fixxo.'
  const {featuredProducts, getFeaturedProducts, dealsProducts_1, getDealsProducts_1, dealsProducts_2, getDealsProducts_2} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeaturedProducts(8)
    getDealsProducts_1(4)
    getDealsProducts_2(4)
  }, [])
  
  return (
    <>
    <header>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Home"/>
      <ShowcaseSection />
    </header>
    <ProductGridSection title="Featured Products" items={featuredProducts} />
    <TopPicksSection />
    <DealsSection title= "Special Deals" items={dealsProducts_1}/>
    <DealsSection_2 title= "Special Deals" items={dealsProducts_2}/>
    <SupportSection />
    <FooterSection />
    </>
  )
}

export default HomeView