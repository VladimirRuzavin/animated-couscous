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

function greetings() {
  alert("sayHello");
}

greetings();

function sum() {
 let x = 5 , y = 10;
 alert(x + y);
}

sum() ;

let calcSquare = (a , b) =>{
  let result = (a + b) ** 2;
  return result;
}

alert (calcSquare (15, 15) )


