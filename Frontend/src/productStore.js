const productsArray = [
    {
        id: "price_1Np59jD25uMblCNPIQSB73fm",
        title: "Coffee",
        price: 4.99
    } ,
    {
        id: "price_1Np5BPD25uMblCNPL2NUfusv",
        title: "Sunglasses",
        price: 9.99
    } ,
    {
        id: "price_1Np5CLD25uMblCNPrc5SYPma",
        title: "Camera",
        price: 39.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if(productData == undefined) {
        console.log( "Product data does not exist ID:" + id);
    } 

    return productData;

}

export  {productsArray, getProductData};