// Business Logic for Shopping Cart

function ShoppingCart() {
  this.shopCart = {};
  this.currentPizzaId = 0;
}

ShoppingCart.prototype.addPizza = function(pizzaItem) {
  pizzaItem.id = this.assignId();
  this.shopCart[pizzaItem.id] = pizzaItem;
};

ShoppingCart.prototype.assignId = function() {
  this.currentPizzaId += 1;
  return this.currentPizzaId; 
};

ShoppingCart.prototype.locatePizza = function(id) {
  if (this.shopCart[id] != undefined) {
    return this.shopCart[id];
  }
  return false;
};

// Business Logic for Pizza Creator Constructor
function PizzaCreator(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = 0;
}

PizzaCreator.prototype.addToppingsPrice = function() {
  let toppingsArray = this.toppings.split(",");
  if (toppingsArray.length != 1) {
    toppingsArray.forEach(element => {
      this.pizzaPrice = this.pizzaPrice += 1;
    });
  } else {
    this.pizzaPrice = 0;
  }
};

PizzaCreator.prototype.addPizzaSizePrice = function() {
  if (this.size === "Large") {
    this.pizzaPrice = this.pizzaPrice += 9;
  } else if (this.size === "Medium") {
    this.pizzaPrice = this.pizzaPrice += 6;
  } else if (this.size === "Small") {
    this.pizzaPrice = this.pizzaPrice += 3;
  }
}

PizzaCreator.prototype.calculateTotalPizzaPrice = function() {
  this.pizzaPrice = "$" + Math.round(101 * this.pizzaPrice * 1.34) / 100;
};

// UI Logic

function displayPizzaList(shoppingCartToDisplay) {
  let pizzaList = document.querySelector("div#pizza-list");
  pizzaList.innerText = null;
  const priceUl = document.createElement("ul");
  Object.keys(shoppingCartToDisplay.shopCart).forEach(function(key) {
    const pizzaList = shoppingCartToDisplay.locatePizza(key);
    const priceLi = document.createElement("li");
    priceLi.append("Pizza " + pizzaList.id + " " + pizzaList.pizzaPrice);
    priceLi.setAttribute("id", pizzaList.id);
    priceUl.append(priceLi);
  });
  pizzaList.append(priceUl);
}

function addToppings() {
  let toppingSelection = document.querySelectorAll('input[name="top"]:checked');
  let toppingSelectionValue = Array.from(toppingSelection);
  toppingTempArray = [];
  toppingSelectionValue.forEach(element => {
    toppingTempArray.push(element.value);
  });
  return toppingTempArray.toString();
}

function selectPizzaSize() {
  const sizeSelection = document.querySelector("input[name='pizza-size']:checked").value;
  return sizeSelection;
}

window.addEventListener("load", function() {
  const shoppingCart = new ShoppingCart();
  this.document.querySelector("form#pizza-creator").addEventListener("submit", (event) => {
    event.preventDefault();
    let newPizza = new PizzaCreator(selectPizzaSize(), addToppings());
    newPizza.addToppingsPrice();
    newPizza.addPizzaSizePrice(); 
    newPizza.calculateTotalPizzaPrice();
    shoppingCart.addPizza(newPizza);
    displayPizzaList(shoppingCart);});
});