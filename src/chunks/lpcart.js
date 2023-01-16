import 
    { 
        collectionType, 
        currency,
        typeOfProducts, 
        products,
        setCollectionType
    } from "../js/api.js"

const productsInCart = document.querySelector("#products-in-cart")
const picItemContainer = document.querySelector("#pic-item-container");
const picTotalPrice = document.querySelector("#pic-total-price");
const picCloseButton = document.querySelector("#pic-close-button")
const picModal = document.querySelector(".pic-modal");
const picBuyButton = document.querySelector("#pic-buy-button");
const thanksForBuy = document.querySelector("#thanks");
const thanksModal = document.querySelector(".th-modal");
const thanksCloseButton = document.querySelector("#th-close-button");

/*  -------------------
    ITEMS LIST FOR BUY
    ------------------- */

export function modelItemsInCart () {
    let items = getItemsInCart();
    let itemsInnerHTML = "";
    if ( items.length == 1) {
        picCloseModal()
    } else {
        for (let i=1; i<items.length; ++i) { itemsInnerHTML += items[i][1]; };
        picItemContainer.innerHTML = itemsInnerHTML;
        picTotalPrice.innerHTML = currency + items[0].toString()
    }
}

export function getItemsInCart() {
    let items = [0];
    let innerHTML = "";
    let totalPrice = 0;
    for (let c=0; c<products.length; ++c) {
        for (let i=0; i<products[c].length;++i){
            if( products[c][i].orders > 0 ){
                totalPrice += products[c][i].price;
                innerHTML = `
                    <div class="pic-item">
                        <figure>
                            <img src="${products[c][i].image}" alt="">
                        </figure>
                        <div>
                            <span>${products[c][i].mark}</span>
                            <h5>${products[c][i].overview}</h5>
                            <h4>${currency}${products[c][i].price}</h4>
                        </div>
                        <button><i id="${products[c][i].id}" class="fa-solid fa-square-xmark"></i></buttonid=>
                    </div>
                    `
                items.push( [ products[c][i].id, innerHTML ] );
            };
        };
    };
    items[ 0 ] = totalPrice;
    return items;
}

/*  --------
     EVENTS 
    -------- */

    // ... items in cart: update items
picItemContainer.addEventListener('click', function( e ) {
    updateProductOrders( e.target.id );
    modelItemsInCart();
});

function updateProductOrders( itemID ) {
    let itemExist = false;
    for (let c=0; c<products.length; ++c) {
        for (let i=0; i<products[c].length;++i){
            if ( products[c][i].id === itemID ) {
                products[c][i].orders = 0;
                itemExist = true;
                break;
            }
        }
        if ( itemExist ) { break; }
    }
}

    // ... items in cart: close modal
picCloseButton.addEventListener('click', function () {
    picCloseModal()
});
window.addEventListener('click', function(e){
    if( e.target == productsInCart ) {
        picCloseModal(500);
    }
})
    
function picCloseModal( mSeconds ){
    setTimeout( function(){
        productsInCart.style.visibility = "hidden";
        productsInCart.style.opacity = "0";
        picModal.classList.toggle('pic-modal-close');
    }, mSeconds );
}

    // .. items in cart: buy button
picBuyButton.addEventListener('click', function(e){
    manageProductSales();
    picCloseModal();
    thanksButtonActive( true );
});

function manageProductSales() {
    let itemExist = false;
    for (let c=0; c<products.length; ++c) {
        for (let i=0; i<products[c].length;++i){
            products[c][i].orders = 0;
        }
        if ( itemExist ) { break; }
    }
}

function thanksButtonActive( action ){ 
    if ( action ){
        thanksForBuy.style.visibility = "visible";
        thanksForBuy.style.opacity = "1";
        thanksModal.classList.toggle('th-modal-close');
    } else {
        thanksForBuy.style.visibility = "hidden";
        thanksForBuy.style.opacity = "0";
        thanksModal.classList.toggle('th-modal-close');
    }
}

    // Thanks: close button
thanksCloseButton.addEventListener('click',function(e){
    console.log("CLICK en boton de THANKS");
    thanksButtonActive( false );
});

/*  ----------------------------
     ROLL ON
    ---------------------------- */

modelItemsInCart()