import React, { createContext, useContext, useState } from 'react'
import { ProductItem } from '../models/ProductModels'

interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    allProducts: ProductItem[]
    featuredProducts: ProductItem[]
    dealsProducts_1: ProductItem[]
    dealsProducts_2: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getAllProducts: () => void
    getFeaturedProducts: (take?: number) => void
    getDealsProducts_1: (take?: number) => void
    getDealsProducts_2: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

    const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { tag: '', description: '', articleNumber: '', name: '', category: '', price: 0, imageName: '' }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [allProducts, setAllProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    const [dealsProducts_1, setDealsProducts_1] = useState<ProductItem[]>([])
    const [dealsProducts_2, setDealsProducts_2] = useState<ProductItem[]>([])
    

// Hämtar ett specifikt artikelnummer
    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }
// Hämtar alla produkter
    const getAllProducts = async () => {
        const res = await fetch(baseUrl)
        setAllProducts(await res.json())
    }
// Featured
    const getFeaturedProducts = async (take: number = 0) => {
        let url = `${baseUrl}/featuredProducts`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }
// Deals
    const getDealsProducts_1 = async (take: number = 0) => {
        let url = `${baseUrl}/dealsProducts_1`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setDealsProducts_1(await res.json())
    }
    const getDealsProducts_2 = async (take: number = 0) => {
        let url = `${baseUrl}/dealsProducts_2`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setDealsProducts_2(await res.json())
    }


    return <ProductContext.Provider value={{product, allProducts, featuredProducts, dealsProducts_1, dealsProducts_2, getProduct, getAllProducts, getFeaturedProducts, getDealsProducts_1, getDealsProducts_2 }}>
        {children}
    </ProductContext.Provider>

}

export default ProductProvider