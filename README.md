--------------------------
Describe: PizzaCreator

Test: "It should create an object with size, toppings, and base pizza price key item pairs."
Code:
let pizza = new PizzaCreator("large", "pepperoni");
Expected Output: {size: "large", toppings: "pepperoni"};

Test: "It should add to pizza price based on how many toppings are added."
Code:
let pizza = new PizzaCreator("large", "pepperoni mushroom");
pizza.addToppingsPrice();
Expected Output: 2

Test: "It should add to pizza price based on pizza size."
Code:
let pizza = new PizzaCreator("large", "pepperoni mushroom");
pizza.addPizzaSizePrice();
Expected Output: 6

Test: "It should multiply the pizza price by 1.35."
Code:
let pizza = new PizzaCreator("large", "pepperoni mushroom");
pizza.calculateTotalPizzaPrice();
Expected Output: 10.8

Test: "It should round down to the tenth decimal place to give a number that actually looks like money."
Code:
let pizza = new PizzaCreator("large", "pepperoni mushroom");
pizza.calculateTotalPizzaPrice();
Expected Output: 10.80


Describe: ShoppingCart




<!-- To Do List -->
<!-- 
  Create Pizza constructor
  Create pizza topping objects/prototype (haven't decided whether to make it an object or as prototype)
  Create prototype to calculate pizza price
  Create UI
  Create Shopping Cart
 -->

 <!-- Constructors and prototypes are used successfully.
Application works as expected.
Tests are included for each business logic behavior and code is committed after each test passes.
Project is in a polished, portfolio-quality state.
The prompt’s required functionality and baseline project requirements are in place. -->