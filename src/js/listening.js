import { 
        collectionType, 
        currency,
        typeOfProducts, 
        products,
        setCollectionType
    } from "./api.js"

import { 
        setDataFromLocalStorage 
    } from "./localstorage.js";

/*  ------------------
     VARIABLES
    ------------------ */    

    // ... navegation section
const linksMainScreen = document.querySelectorAll(".home");
const itemsMobileScreen = document.querySelectorAll('.mobile');
const itemsSideleaf = document.querySelectorAll('.side-leaf');
const sideleaf = document.querySelector("#buttons-side-leaf");
const homeCartButton = document.querySelector(".hm-cart");
const mobileCartButton = document.querySelector(".mb-cart");
    // ... products section
const summaryCollection = document.querySelector("#summary-collection");
const productContainer = document.querySelector("#product-container")
    // ... product section : details
const productDetails = document.querySelector("#product-details");
const modal = document.querySelector(".modal");
const pInformation = document.querySelector("#information");
const closeButton = document.querySelector("#close");
    // ... product section : items in cart / thanks
const productsInCart = document.querySelector("#products-in-cart")
const picItemContainer = document.querySelector("#pic-item-container");
const picTotalPrice = document.querySelector("#pic-total-price");
const picCloseButton = document.querySelector("#pic-close-button")
const picModal = document.querySelector(".pic-modal");
const picBuyButton = document.querySelector("#pic-buy-button");
const thanksForBuy = document.querySelector("#thanks");
const thanksModal = document.querySelector(".th-modal");
const thanksCloseButton = document.querySelector("#th-close-button");

/*  ------------------
     PRODUCTS LISTING
    ------------------ */

export function rollProductHtml() {

    document.querySelector("#protagonist").style.backgroundImage = `url(${typeOfProducts[collectionType].protagonist})`;
    summaryCollection.innerHTML = modelSummaryCollection( collectionType );
    productContainer.innerHTML = modelingCards( collectionType );
    removeFocusItems()
    addFocusItem()
    refreshCartOfNav()
}

function modelSummaryCollection( collectionType ) {
    return `
        <h2>${typeOfProducts[collectionType].type}</h2>
        <p>${typeOfProducts[collectionType].resume}</p>
    `
}

function modelingCards( collectionType ) {
    let cards = "";
    for ( let i=0; i<products[collectionType].length; ++i ){
        cards += `
            <div class="product-card">
                <figure>
                    <img id="${products[collectionType][i].id}" src="${products[collectionType][i].image}" alt="">
                </figure>
                <div class="overview">
                    <span>${products[collectionType][i].mark}</span>
                    <h5>${products[collectionType][i].overview}</h5>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>                            
                    </div>
                    <h4>${currency}${products[collectionType][i].price}</h4>
                </div>
                <a href="#"><i id="cart-${products[collectionType][i].id}" `
        if ( products[collectionType][i].orders > 0 ) {
            cards += `
                class="fa-solid fa-cart-shopping sh-cart h-cart"></i></a>
            </div>
            `
        } else {
            cards += `
                class="fa-solid fa-cart-shopping sh-cart"></i></a>
            </div>
            `
        }
    }
    return cards;
}
// actualiza color carrito:NAV
function refreshCartOfNav() {
    let items = getItemsInCart()
    if ( items.length > 1 ) {
        homeCartButton.classList.add( "h-cart" );
        mobileCartButton.classList.add("h-cart");
    } else {
        homeCartButton.classList.remove( "h-cart" );
        mobileCartButton.classList.remove("h-cart");
    }
}

/*  -------------------
    ITEMS LIST FOR BUY
    ------------------- */

export function modelItemsInCart () {
    let items = getItemsInCart();
    let itemsInnerHTML = "";
    if ( items.length == 1) {
        picCloseModal();
        rollProductHtml();
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

    // ... navegation: items main screen
linksMainScreen.forEach( button => {
    let itemID = 1;
    button.addEventListener('click', function(e){
        if ( e.target.classList[itemID] == "wear-1" )  {
            removeFocusItems()
            e.target.classList.add('active');
            itemsSideleaf[ 1 ].classList.add('active')
            setCollectionType( 0 );
            rollProductHtml();
            setDataFromLocalStorage();
        } else if (e.target.classList[itemID] == "wear-2" ) {
            removeFocusItems()
            e.target.classList.add('active');
            itemsSideleaf[ 2 ].classList.add('active')
            setCollectionType( 1 );
            rollProductHtml();
            setDataFromLocalStorage();
        } else if (e.target.classList[itemID] == "fa-cart-shopping" ) {
            if ( productsInCart.style.visibility !== "visible" ){
                productsInCart.style.visibility = "visible";    
                productsInCart.style.opacity = "1";
                picModal.classList.toggle("pic-modal-close");
                modelItemsInCart() 
            }
        }
    });
} );

    // ... navegation: items mobile screen
itemsMobileScreen.forEach( button => {
    const itemID = 1;        
    button.addEventListener( 'click', (e)=> {
        if ( e.target.classList[itemID] == "fa-cart-shopping" ) {
            // e.target.classList.add('active');
            productsInCart.style.visibility = "visible";    
            productsInCart.style.opacity = "1";
            picModal.classList.toggle("pic-modal-close");
            modelItemsInCart()             
        } else if ( e.target.classList[itemID] == "fa-bars" ) {
            e.target.classList.add('active');
            sideleaf.classList.add('active');
        }
    })
} );

    // ... navegation: items sideleaf screen
itemsSideleaf.forEach( button=> {
    const itemID = 1;
    button.addEventListener( 'click', (e)=> {
        if ( e.target.classList[itemID] == "wear-1")  {
            removeFocusItems();
            e.target.classList.add('active');
            linksMainScreen[ 0 ].classList.add('active')
            setCollectionType( 0 );
            rollProductHtml();
            setDataFromLocalStorage();
        } else if ( e.target.classList[itemID] == "wear-2" ) {
            removeFocusItems();
            e.target.classList.add('active');
            linksMainScreen[ 1 ].classList.add('active')
            setCollectionType( 1 );
            rollProductHtml();
            setDataFromLocalStorage();
        } else if ( e.target.classList[itemID] == "fa-square-xmark" ) {
            sideleaf.classList.remove('active');
        }
    })
} );

function removeFocusItems() {
    linksMainScreen.forEach( button => {
        if ( button.firstChild.classList == undefined ) {
            button.classList.remove('active');    
        } else {
            button.firstChild.classList.remove('active');
        }
    } );
    itemsSideleaf.forEach( button => {
        if ( button.firstChild.classList == undefined ) {
            button.classList.remove('active');    
        } else {
            button.firstChild.classList.remove('active');
        }
    } );
};

function addFocusItem() {
    if ( collectionType == 0) { /*wear-1*/
        linksMainScreen[0].classList.add('active')
        itemsSideleaf[1].classList.add('active')
    } else if ( collectionType == 1 ) { /*wear-2*/
        linksMainScreen[1].classList.add('active')
        itemsSideleaf[2].classList.add('active')
    }
};

    // ... products: cards (image, cart)
productContainer.addEventListener('click', function (e) {

    e.preventDefault();

    for (let i=0; i<=products[collectionType].length-1;++i ) {
            // click over image
        if ( products[collectionType][i].id == e.target.id ) {
            pInformation.innerHTML = modelProductInfo( typeOfProducts[collectionType], products[collectionType][i]);
            productDetails.style.visibility = "visible";    
            productDetails.style.opacity = "1";
            modal.classList.toggle("modal-close");
            break;
            // click over cart-image
        } else if ( "cart-"+products[collectionType][i].id == e.target.id ) {
            if (products[collectionType][i].orders > 0) {
                products[collectionType][i].orders = 0;
            } else {
                products[collectionType][i].orders = 1;
            }
            document.querySelector("#"+e.target.id).classList.toggle('h-cart');
            refreshCartOfNav();
            setDataFromLocalStorage()
        }
    }

});
    
function modelProductInfo( typeProduct, product ) {
    return `
        <figure>
            <img src="${product.image}" alt="">
        </figure>
        <div id="details">
            <h6>Inicio/${typeProduct.type}</h6>
            <h4>${product.subtitle}</h4>
            <span>${currency}${product.price.toString()}</span>     
            <h4>Detalle del Producto</h4>               
            <p>${product.details}</p>
        </div>
    `
}

    // ... products details: close modal
closeButton.addEventListener('click', function () {
    setTimeout( function(){
        productDetails.style.visibility = "hidden";
        productDetails.style.opacity = "0";
        modal.classList.toggle('modal-close');
    } );
});
window.addEventListener('click', function(event){
    if( event.target == productDetails) {
        setTimeout( function(){
            productDetails.style.visibility = "hidden";
            productDetails.style.opacity = "0";
            modal.classList.toggle('modal-close');
        },500)
    }
})

// ... items in cart: update items
picItemContainer.addEventListener('click', function( e ) {
    updateProductOrders( e.target.id, false );
    modelItemsInCart();
});

export function updateProductOrders( itemID, action ) {
    let itemExist = false;
    for (let c=0; c<products.length; ++c) {
        for (let i=0; i<products[c].length;++i){
            if ( products[c][i].id === itemID ) {
                if ( action ) {
                    ++products[c][i].orders;
                    itemExist = true;
                    break;
                } else if ( action == false ){
                    products[c][i].orders = 0;
                    itemExist = true;
                    break;
                }
            }
        }
        if ( itemExist ) { break; }
    }
}

    // ... items in cart: close modal
picCloseButton.addEventListener('click', function () {
    picCloseModal();
    rollProductHtml();
});
window.addEventListener('click', function(e){
    if( e.target == productsInCart ) {
        picCloseModal(500);
        rollProductHtml();
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
    setDataFromLocalStorage();       
    picCloseModal();
    thanksButtonActive( true );
});

function manageProductSales() {
    for (let c=0; c<products.length; ++c) {
        for (let i=0; i<products[c].length;++i){
            products[c][i].orders = 0;
        }
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
    thanksButtonActive( false );
    rollProductHtml() 
});
    
