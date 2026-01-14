import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const ProductContext = createContext();
function ProductContextProvider({ children }) {
const [products, setProducts] = useState([]);
useEffect(() => {
getProducts();
}, []);
function getProducts() {
axios.get('https://fakestoreapi.com/products')
.then(response => setProducts(response.data))
.catch(error => console.error('Error fetching products:', error));
}
return (
<ProductContext.Provider value={{ products, getProducts }}>
{children}
</ProductContext.Provider>
);
}
export default ProductContextProvider;