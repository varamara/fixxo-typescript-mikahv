import React, {useContext} from 'react'
import { FeaturedProductsContext, dealsProductsContext, ProductsContext } from '../contexts/contexts'

import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import DealsSection from '../sections/DealsSection_1'
import DealsSection_2 from '../sections/DealsSection_2'
import SupportSection from '../sections/SupportSection'

const HomeView = () => {

  window.top.document.title = 'Fixxo.'

  const {featured, deals} = useContext(ProductsContext);

  return (
    <>
    <header>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Home"/>
      <ShowcaseSection />
    </header>
    <ProductGridSection title="Featured Products" items={featured}/>
    <TopPicksSection />
    <DealsSection items={deals}/>
    <DealsSection_2 items={deals}/>
    <SupportSection />
    <FooterSection />
    </>
  )
}

export default HomeView