import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import initFontAwesome from '../utilities/initFontAwesome'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { MenuIcon } from '../components/MenuIcon';



const MainMenuSection: React.FC  = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)    
  const { totalQuantity } = useShoppingCartContext() as ShoppingCartContextType

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
        <MenuIcon link="/search" button = {undefined} icon="fa-regular fa-magnifying-glass"/>
        <MenuIcon link="/compare" button = {undefined} icon="fa-regular fa-code-compare" hideOnMobile ={true}/>
        <MenuIcon link="/wishlist" button = {undefined} icon="fa-regular fa-heart" hasBadge = {true} quantity={totalQuantity}  hideOnMobile ={true}/>
        <MenuIcon link="/shoppingcart" button = {undefined} icon="fa-regular fa-bag-shopping" hasBadge = {true} quantity={totalQuantity}/>
        <button onClick={toggleMenu} className="menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>
      </div>
    </nav>
  )
}

initFontAwesome();
export default MainMenuSection