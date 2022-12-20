import './App.scss';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
import ProductProvider from './contexts/ProductContext';
import initFontAwesome from './utilities/initFontAwesome';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';


function App() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<HomeView/>} />
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
        </ShoppingCartProvider>
    </ProductProvider>
  </BrowserRouter>
  );
}

initFontAwesome();

export default App;
