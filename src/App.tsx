import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import ShoppingcartView from './views/ShoppingcartView';
import NotFoundView from './views/NotFoundView';
import { ProductsContext } from './contexts/contexts'


function App() {

  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [deals, setDeals] = useState([])

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedProducts()

    const fetchDealsProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setDeals(await result.json())
    }
    fetchDealsProducts()

  }, [setProducts, setFeatured, setDeals])  


  return (
    <BrowserRouter>
    <ProductsContext.Provider value={{products, featured, deals}}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishlistView />} />
        <Route path="/shoppingcart" element={<ShoppingcartView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </ProductsContext.Provider>
  </BrowserRouter>
  );
}

export default App;
