import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import initFontAwesome from '../utilities/initFontAwesome'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { MenuIcon } from '../components/MenuIcon';

initFontAwesome();

const MainMenuSection: React.FC  = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)    
  const { totalQuantity } = useShoppingCartContext() as ShoppingCartContextType

  // varför är totalQuantity null när jag trodde jag importerat contexten den finns i.

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <nav className="mainmenu">
        <NavLink className="logo" to="/" end>Fixxo.</NavLink>
      <div className={`menu-links ${ showMenu ? "d-grid" : ""}`}>
        <NavLink className="menu-link" to="/" end>Home</NavLink>
        <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
        <NavLink className="menu-link" to="/products">Products</NavLink>
        <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
      </div>
      
      <div className="menu-icons">
        <MenuIcon link="/search" button = {undefined} icon="fa-regular fa-magnifying-glass" />
        <MenuIcon hideOnMobile ={true}  button = {undefined} link="/compare" icon="fa-regular fa-code-compare" />
        <MenuIcon hideOnMobile ={true} hasBadge = {true}  button = {undefined}  quantity={totalQuantity} link="/wishlist" icon="fa-regular fa-heart" />
        <MenuIcon hasBadge = {true}  button = {undefined}  quantity={totalQuantity} link="/shoppingcart" icon="fa-regular fa-bag-shopping " />
        <button onClick={toggleMenu} className="menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>
      </div>
    </nav>
  )
}

export default MainMenuSection