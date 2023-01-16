let collectionType = 0;
let currency = "$";
let typeOfProducts = [ 
    {
        type:"Camisas",
        resume:"Colección de verano diseño moderno",
        protagonist:"../../public/assets/images/protagonist_tshirt.png"
    }, 
    {
        type:"Suéteres",
        resume:"Colección de otoño moda casual",
        protagonist:"./public/assets/images/protagonist_sweater.png"
    } 
];
let products = [
    [
        {
            type: 0,
            mark: "adidas",
            overview: "Camisa manga corta con estampado",
            image: "./public/assets/images/products/f1.jpg",
            price: 178,
            id: "f01",
            subtitle: "Camiseta de moda para hombre",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        }, 
        {
            type: 0,
            mark: "adidas",
            overview: "Camisa de manga corta con dibujo cómico",
            image: "/public/assets/images/products/f2.jpg",
            price: 178,
            id: "f02",
            subtitle: "Camiseta de moda para hombre",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        },
        {
            type: 0,
            mark: "adidas",
            overview: "Camisa de manga corta con dibujo cómico",
            image: "/public/assets/images/products/f3.jpg",
            price: 178,
            id: "f03",
            subtitle: "Camiseta de moda para hombre",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        },
        {
            type: 0,
            mark: "adidas",
            overview: "Camisa de manga corta con dibujo cómico",
            image: "/public/assets/images/products/f4.jpg",
            price: 178, 
            id: "f04",
            subtitle: "Camiseta de moda para hombre",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        },
        {
            type: 0,
            mark: "adidas",
            overview: "Camisa de manga corta con dibujo cómico",
            image: "/public/assets/images/products/f5.jpg",
            price: 178,
            id: "f05",
            subtitle: "Camiseta de moda para hombre",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        },
        {
            type: 0,
            mark: "adidas",
            overview: "Camisa de manga larga con dibujo cómico",
            image: "/public/assets/images/products/f6.jpg",
            price: 178,
            id: "f06",
            subtitle: "Camiseta de moda para hombre",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        } 
    ],
    [
        {
            type: 1,
            mark: "Inner Mongolia Daqian",
            overview: "Suéter de felpa de lana pura",
            image: "/public/assets/images/products/s1.png",
            price: 178,
            id: "s01",
            subtitle: "Suéter moda casual para mujer",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        },
        {
            type: 1,
            mark: "Inner Mongolia Daqian",
            overview: "Suéter de felpa de lana pura",
            image: "/public/assets/images/products/s2.png",
            price: 178,
            id: "s02",
            subtitle: "Suéter moda casual para mujer",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        },
        {
            type: 1,
            mark: "Inner Mongolia Daqian",
            overview: "Suéter de felpa de lana pura",
            image: "/public/assets/images/products/s3.png",
            price: 178,
            id: "s03",
            subtitle: "Suéter moda casual para mujer",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        },
        {
            type: 1,
            mark: "Inner Mongolia Daqian",
            overview: "Suéter de felpa de lana pura",
            image: "/public/assets/images/products/s4.png",
            price: 178,
            id: "s04",
            subtitle: "Suéter moda casual para mujer",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        },
        {
            type: 1,
            mark: "Inner Mongolia Daqian",
            overview: "Suéter de felpa de lana pura",
            image: "/public/assets/images/products/s5.png",
            price: 178,
            id: "s05",
            subtitle: "Suéter moda casual para mujer",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        },
        {
            type: 1,
            mark: "Inner Mongolia Daqian",
            overview: "Suéter de felpa de lana pura",
            image: "/public/assets/images/products/s6.png",
            price: 178,
            id: "s06",
            subtitle: "Suéter moda casual para mujer",
            details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quia quibusdam doloremque earum quisquam modi explicabo exercitationem, blanditiis asperiores fugiat consequuntur optio aut excepturi similique eaque ex. Alias neque ut mollitia corporis quis consectetur nisi consequuntur nesciunt at dolorem, laborum sint placeat, suscipit dolore fuga minus iste. Quos, quidem dignissimos.",
            orders: 0
        }
    ]
];


function setCollectionType( value ) {
    collectionType = value;
}

function getCollectionType() {
    return collectionType;
}

export { 
    collectionType, 
    currency, 
    typeOfProducts, 
    products,
    setCollectionType,
    getCollectionType
};

