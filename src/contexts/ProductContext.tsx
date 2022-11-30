import React, { createContext, useContext, useState } from 'react'
import { ProductItem } from '../models/ProductModels'

interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    allProducts: ProductItem[]
    featuredProducts: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getAllProducts: (take?: number) => void
    getFeaturedProducts: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

    const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'https://win22-webapi.azurewebsites.net/api/products'
    const EMPTY_PRODUCT: ProductItem = { articleNumber: '', name: '', category: '', price: 0, take: 0, imageName: '' }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [allProducts, setAllProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    

    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(baseUrl + `/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAllProducts = async (take: number = 0) => {
        let url = baseUrl

        if (take !== 0)
            url = baseUrl + `?take${take}`

        const res = await fetch(url)
        setAllProducts(await res.json())
    }
    const getFeaturedProducts = async (take: number = 0) => {
        let url = baseUrl + `?tag=featuredProducts`

        if (take !== 0)
            url += baseUrl + `?tag=featuredProducts&take${take}`

        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }


    return <ProductContext.Provider value={{product, allProducts, featuredProducts, getProduct, getAllProducts, getFeaturedProducts }}>
        {children}
    </ProductContext.Provider>

}

export default ProductProvider