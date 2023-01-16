import { typeOfProducts, products } from "../js/api.js"

const productContainer = document.querySelector("#product-container");
const productDetails = document.querySelector("#product-details");
const modal = document.querySelector(".modal");
const pInformation = document.querySelector("#information");
const closeButton = document.querySelector("#close");

/*  ---------------------
     PRODUCTS / EVENTUAL
    --------------------- */

productContainer.addEventListener('click', function (event) {
    let collectionType = 0;

    for (let i=0; i<=products[collectionType].length-1;++i ) {

        if ( products[collectionType][i].id == event.target.id ) {

            event.preventDefault();
            pInformation.innerHTML = modelProductInfo( typeOfProducts[collectionType], products[collectionType][i]);
            productDetails.style.visibility = "visible";    
            productDetails.style.opacity = "1";
            modal.classList.toggle("modal-close");
            console.log( "CLICK en producto...SELECCIONADO!!")
            break;
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
            <span>${product.price}</span>     
            <h4>Detalle del Producto</h4>               
            <p>${product.details}</p>
        </div>
    `
}

/*  -----------------
     PRODUCT DETAILS
    ----------------- */

closeButton.addEventListener('click', function () {
    console.log( "CLICK boton de cierre");
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
