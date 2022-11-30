import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'

interface MenuIconType {
  hideOnMobile?: boolean
  hideOnTablet?: boolean
  link?: string
  icon?: string
  quantity?: number
}

const MenuIcon: React.FC<MenuIconType> = ({hideOnMobile, hideOnTablet, link, icon }) => {
  const { totalQuantity } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <NavLink className={`menu-icon ${hideOnMobile ? "d-none d-md-flex" : ""} ${hideOnTablet ? "d-none d-md-flex" : ""}`} to={link} end>
      <span className="position-absolute top-10 translate-middle badge rounded-pill bg-theme">{totalQuantity}</span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon