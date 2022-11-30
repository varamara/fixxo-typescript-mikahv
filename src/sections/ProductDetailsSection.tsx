import React from 'react'
import { ProductItem } from '../models/ProductModels'

interface ProductDetailsType {
  item: ProductItem
}

const itemDetailsSection: React.FC<ProductDetailsType>  = ({item}) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <img src={item.imageName} />
    </div>
  )
}

export default itemDetailsSection

// en fil ska vara tsx om den har ett grafiskt element, ett som syns utåt.
// Så det blir basically ProductItem > ProductDetailsType som deklarerar ProductItem i item > item.name