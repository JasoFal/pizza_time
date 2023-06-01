// Business Logic for Shopping Cart
function ShoppingCart() {
  this.totalPrice = 0;
}

// Business Logic for Pizza Creator Constructor
function PizzaCreator(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.pizzaPrice = 0;
}

PizzaCreator.prototype.addToppingsPrice = function() {
  let toppingsArray = this.toppings.split(" ");
  toppingsArray.forEach(element => {
    this.pizzaPrice = this.pizzaPrice += 1;
  });
}

PizzaCreator.prototype.addPizzaSizePrice = function() {
  if (this.size === "large") {
    this.pizzaPrice = this.pizzaPrice += 6;
  } else if (this.size === "small") {
    this.pizzaPrice = this.pizzaPrice += 3;
  }
}

PizzaCreator.prototype.calculateTotalPizzaPrice = function() {
  this.pizzaPrice = Math.round(100 * this.pizzaPrice * 1.34) / 100;
}

// UI



