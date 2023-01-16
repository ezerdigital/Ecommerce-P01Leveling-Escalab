const itemsMainScreen = document.querySelectorAll(".home");
const itemsMobileScreen = document.querySelectorAll('.mobile');
const itemsSideleaf = document.querySelectorAll('.side-leaf');
const sideleaf = document.querySelector("#buttons-side-leaf");

/*  --------
     EVENTS 
    -------- */

    // ... items main screen
itemsMainScreen.forEach( button => {
    let itemID = 1;
    button.addEventListener('click', function(e){
        if ( e.target.classList[itemID] == "wear-1" )  {
            removeFocusItems()
            e.target.classList.add('active');
            itemsSideleaf[ 1 ].classList.add('active')
        } else if (e.target.classList[itemID] == "wear-2" ) {
            removeFocusItems()
            e.target.classList.add('active');
            itemsSideleaf[ 2 ].classList.add('active')
        } else if (e.target.classList[itemID] == "fa-cart-shopping" ) {
            removeFocusItems()
            e.target.classList.add('active');
            // mostrar MODAL de productos en el carrito
        }
    });
} );

    // ... items mobile screen
itemsMobileScreen.forEach( button => {
    const itemID = 1;        
    button.addEventListener( 'click', (e)=> {
        if ( e.target.classList[itemID] == "fa-cart-shopping" ) {
            e.target.classList.add('active');
            console.log( "ok estas en MOBILE-CART" );
        } else if ( e.target.classList[itemID] == "fa-bars" ) {
            e.target.classList.add('active');
            sideleaf.classList.add('active');
            console.log( "ok estas en MOBILE-BARS" );
        }
    })
} );

    // ... items sideleaf screen
itemsSideleaf.forEach( button=> {
    const itemID = 1;
    button.addEventListener( 'click', (e)=> {
        if ( e.target.classList[itemID] == "wear-1")  {
            removeFocusItems();
            e.target.classList.add('active');
            itemsMainScreen[ 0 ].classList.add('active')
            // setCollectionType(0);
            // rollProductHtml();
            console.log( "ok estas en SIDE-WEAR-1");
        } else if ( e.target.classList[itemID] == "wear-2" ) {
            removeFocusItems();
            e.target.classList.add('active');
            itemsMainScreen[ 1 ].classList.add('active')
            // setCollectionType(1);
            // rollProductHtml();
            console.log( "ok estas en SIDE-WEAR-2");
        } else if ( e.target.classList[itemID] == "fa-square-xmark" ) {
            sideleaf.classList.remove('active');
            console.log( "ok estas en SIDE-XMARK" );
        }
    })
} );

function removeFocusItems() {
    itemsMainScreen.forEach( button => {
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
