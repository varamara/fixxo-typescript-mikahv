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
import { ProductItem } from '../models/ProductModels'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { ShoppingCartItemType } from '../components/ShoppingCartItem'

interface HomeViewType {
  item: ProductItem
}

const HomeView: React.FC<HomeViewType> = ({item}) => {
  
  document.title = 'Fixxo.'
  const {featuredProducts, getFeaturedProducts, dealsProducts, getDealsProducts} = useProductContext() as ProductContextType

 
  useEffect(() => {
    getFeaturedProducts(8)
  }, [])
  useEffect(() => {
    getDealsProducts(4)
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
    <DealsSection title= {item.name} items={dealsProducts}/>
    <DealsSection_2 title= {item.name} items={dealsProducts}/>
    <SupportSection />
    <FooterSection />
    </>
  )
}

export default HomeView

// Det kan mycket väl vara så att du inte anropar produkterna i ex dealssection och gridsection som du ska. 
// Nu anropar du product från AllProducts men har angett dealsProduct och featuredProducts här i HomeView, 
// Skillnade är att product anropar articlenumber medan deals och featured anropar ett visst ospecifierat antal.
// Kanske är ett problem eller inte. Fixa till senare om det behövs.. .