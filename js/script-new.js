//функции в js
let burger = document.querySelector(".burger");
function getBurgerElement() {
  console.log(burger);
}
getBurgerElement();

function clickOnBurger() {
  let burger = document.querySelector(".burger");
  burger.onclick = function() {
    alert(burger);
  }
}
clickOnBurger();


//задание 1
function greetings() {
  alert("sayHello");
}

greetings();

//задание 2
function sum() {
 let x = 5 , y = 10;
 alert(x + y);
}

sum();


//задание 3
let calcSquare = (a , b) =>{
  let result = (a + b) ** 2;
  return result;
}

alert (calcSquare (15, 15) );


//задание 4
function calc() {
  let double = 15 * 2;
  alert (double);
}

calc();




