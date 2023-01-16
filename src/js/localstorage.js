import { 
    collectionType, 
    currency,
    typeOfProducts, 
    products,
    setCollectionType
} from "./api.js"

import { 
    getItemsInCart, 
    updateProductOrders 
} from "./listening.js";


export function getDataFromLocalStorage() {
    let itemsInCart = [];
    let cType = 0;
    if ( localStorage.getItem('collectionType') != null ) {
        cType = Number( localStorage.getItem('collectionType') );
        setCollectionType( cType );
        itemsInCart = JSON.parse( localStorage.getItem('itemsInCart'));
        if ( itemsInCart.length ) {
            for (let i=0;i<itemsInCart.length;++i) { updateProductOrders( itemsInCart[i], true ) };
        }
    }
}

export function setDataFromLocalStorage() {
    let items = getItemsInCart();
    let itemsInCart = [];
    if ( items.length > 1 ) {
        items.forEach( (element, index ) => {
            if (index>0) {
                itemsInCart.push(element[0]);
            }
        });
    }
    localStorage.setItem('collectionType', collectionType );
    localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
}

