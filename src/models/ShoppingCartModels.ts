import { ProductItem } from "./ProductModels"

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
  }
  


// Detta är alltså vad ett ShoppingCartItem innehåller - en array av CartItem

//   [
//     {
//     "articleNumber": "123123"
//     "quantity": 1
//     "product": {
//         "articleNumber": "123123",
//         "name": "Product 1",
//         "category": "Fashion",
//         "price": 12000,
//         "imageName": "blabla"
//         }
//     }
//   ]