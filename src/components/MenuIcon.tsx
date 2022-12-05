import React, { HTMLAttributes } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'

interface MenuIconType {
  hideOnMobile?: boolean
  hideOnTablet?: boolean
  link: string
  icon?: string
  quantity?: number
  hasBadge?: boolean
  button: undefined
}
export interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
  type: "button"
}

export const MenuIcon: React.FC<MenuIconType> = ({hideOnMobile, hideOnTablet, link, icon, hasBadge }) => {
  const { totalQuantity } = useShoppingCartContext() as ShoppingCartContextType

  return (
    <button type="button" className={`menu-icon ${hideOnMobile ? "" : ""} ${hideOnTablet ? "d-none d-md-flex" : ""}`}>
      <NavLink to={link} end>
        {
          hasBadge && <span className="position-absolute top-10 translate-middle badge rounded-pill bg-theme">{totalQuantity}</span>
        }
        <i className={icon}></i>
      </NavLink>
    </button>
  )
}

export default MenuIcon