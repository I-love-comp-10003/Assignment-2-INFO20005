let cart = [];

function addToCart(productId, productName, productPrice) {
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1
        })
    }
}