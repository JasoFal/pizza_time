# _{Application Name}_

#### By _**Jason Falk**_

#### _Fidgetech Independent for Javascript Objects_

## Technologies Used

* _Javascript_
* _HTML_
* _Bootstrap_
* _Git/Git Bash_

## Description

_A fidgetech independent project created in order to demonstrate knowledge of Javascript objects. It's a pizza ordering website where you can select the size of the pizza and its toppings to determine a pizza price if you will._

## Setup/Installation Requirements

* _In Git Bash type git clone https://github.com/JasoFal/pizze_time.git_
* _Either use Git Bash to reach the top level of the directory or open file explorer and find the directory._
* _Open index.html in the browser of your choice using one of the following methods._
------
* _Use command start index.html if in Git Bash._
* _In file explorer click on index.html._
------
* _Alternatively visit this *[link](https://jasofal.github.io/pizza_time/)* to view the website on gh-pages._

## Known Bugs

* _No known bugs._

## License

_MIT_

Copyright (c) _6/13/23_ _Jason Falk_



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

Test: "Add price modifiers for pizza size large, medium, and small."
Code:
let pizza = new PizzaCreator("medium", "pepperoni mushroom");
pizza.addPizzaSizePrice();
Expected Output: 6


 <!-- Constructors and prototypes are used successfully.
Application works as expected.
Tests are included for each business logic behavior and code is committed after each test passes.
Project is in a polished, portfolio-quality state.
The prompt’s required functionality and baseline project requirements are in place. -->