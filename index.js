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
    var ite = cart[0]['itemName']
    var pri = cart[0]['itemPrice']
    return `In your cart, you have ${ite} at $${pri}.`
  }
  else if (cart[2]==undefined) {
    var pri1 = cart[0]['itemPrice']
    var ite1 = cart[0]['itemName']
    var pri2 = cart[1]['itemPrice']
    var ite2 = cart[1]['itemName']
    return `In your cart, you have ${ite1} at $${pri1}, and ${ite2} at $${pri2}.`
  }
  else {
    var state = `In your cart, you have `
    for (i = 0;i<cart.length;i++) {
      var i = i
      var pri = cart[i]['itemPrice']
      var ite = cart[i]['itemName']
      state = state + ite +' at $' + price
      if (i<cart.length-2) {state = state + ', '}
      else if (i<cart.length-1) {state = state + ', and '}
      else {state= state + '.'}
    }
    return state
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
