import { getStoredCart } from "../utilities/fakedb";

export const productsAndCardLoader = async() =>{
    // get products
    const productsData =await fetch('products.json');
    const products =await productsData.json();

    // Get cart
    const savedCart = getStoredCart();
    console.log(products)
    const previousCart = []
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity =savedCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }

    return { products: products, previousCart:previousCart };
}