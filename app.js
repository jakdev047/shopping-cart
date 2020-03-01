// selection
const substractBtn = document.querySelectorAll('.substractBtn');
let quantityInput = document.querySelectorAll('.quantityInput');
const addBtn = document.querySelectorAll('.addBtn');
let RemoveItemBtn = document.querySelectorAll('.remove-item');


let cartPrices = document.querySelectorAll('.cart-price');

let cartSubTotalPrices = document.querySelectorAll('.cart-sub-total-price')[0];
let cartTotalPrices = document.querySelectorAll('.cart-total-price')[0];

// increment

// first
addBtn[0].addEventListener('click',function(){
  quantityInput[0].value = parseInt(quantityInput[0].value) + 1;

  let singlePrice = 100;
  let currentSubTotal = parseInt(cartSubTotalPrices.innerText);
  let tax = 10;

  cartPricesTotal = singlePrice* quantityInput[0].value;
  cartPrices[0].innerText = cartPricesTotal;


  currentSubTotal += singlePrice;

  cartTotalPricesNum = currentSubTotal + tax;

  // output
  cartSubTotalPrices.innerText = currentSubTotal;
  cartTotalPrices.innerText = cartTotalPricesNum;
})

// 2nd
addBtn[1].addEventListener('click',function(){
  quantityInput[1].value = parseInt(quantityInput[1].value) + 1;

  let singlePrice = 50;
  let currentSubTotal = parseInt(cartSubTotalPrices.innerText);
  let tax = 10;

  cartPricesTotal = singlePrice* quantityInput[1].value;
  cartPrices[1].innerText = cartPricesTotal;


  currentSubTotal += singlePrice;

  cartTotalPricesNum = currentSubTotal + tax;

  // output
  cartSubTotalPrices.innerText = currentSubTotal;
  cartTotalPrices.innerText = cartTotalPricesNum;
 
})

// decrement 

// first
substractBtn[0].addEventListener('click',function(){
  if( quantityInput[0].value > 0) {
    quantityInput[0].value = parseInt(quantityInput[0].value) - 1;

    let singlePrice = 100;
    let currentSubTotal = parseInt(cartSubTotalPrices.innerText);
    let tax = 10;

    cartPricesTotal = singlePrice* quantityInput[0].value;
    cartPrices[0].innerText = cartPricesTotal;

    currentSubTotal -= singlePrice;

    cartTotalPricesNum = currentSubTotal + tax;

    // output
    cartSubTotalPrices.innerText = currentSubTotal;
    cartTotalPrices.innerText = cartTotalPricesNum;
  }

  
})

substractBtn[1].addEventListener('click',function(){
  if( quantityInput[1].value > 0) {
    quantityInput[1].value = parseInt(quantityInput[1].value) - 1;

    let singlePrice = 50;
    let currentSubTotal = parseInt(cartSubTotalPrices.innerText);
    let tax = 10;

    cartPricesTotal = singlePrice* quantityInput[1].value;
    cartPrices[1].innerText = cartPricesTotal;

    currentSubTotal -= singlePrice;

    cartTotalPricesNum = currentSubTotal + tax;

    // output
    cartSubTotalPrices.innerText = currentSubTotal;
    cartTotalPrices.innerText = cartTotalPricesNum;
  }

  
})


// hide element

for (let i = 0; i < RemoveItemBtn.length; i++) {
  const element = RemoveItemBtn[i];
  const elementcartPrices = cartPrices[i];
  element.addEventListener('click',function(){

    element.parentElement.parentElement.parentElement.remove();

    let singleSubPrice = parseFloat(elementcartPrices.innerText);
    let subTotal = Math.abs(singleSubPrice - parseInt(cartSubTotalPrices.innerText));
    cartSubTotalPrices.innerText = subTotal;

    let totalNum = parseFloat(cartTotalPrices.innerText);
    let actualTotalNum= Math.abs(totalNum - singleSubPrice);
    cartTotalPrices.innerText = actualTotalNum;
  })
  
}


