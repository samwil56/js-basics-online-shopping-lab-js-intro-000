var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var ite = item
  var rice = Math.floor(Math.random()*100)+1
  var newarr = {itemName:`${item}`, itemPrice: rice}
  cart.push(newarr)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart[0]== undefined) {return 'Your shopping cart is empty.'}
  else if (cart[1]==undefined) {
    var ite = cart[0][itemName]
    var pri = cart[0][itemPrice]
    return `In your cart, you have ${ite} at $${pri}.`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
