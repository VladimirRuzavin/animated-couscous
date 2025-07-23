//функции в js
let burger = document.querySelector(".burger");
function getBurgerElement() {
  console.log(burger);
}
getBurgerElement();

function clickOnBurger() {
  let burger = document.querySelector(".burger");
  burger.onclick = function () {
    alert(burger);
  };
}
clickOnBurger();

//задание 1
function sayHello(from, text) {
    console.log (from + ": " + text)
}

sayHello("Вова", "Привет")


//задание 2
function sum(x, y) {
  return x + y;
}

let result = sum (1, 1);
alert(result);

//задание 3
let calcSquare = (a) => {
  let result = a * 2;
  return result;
};

alert(calcSquare(15));

//задание 4
function calc() {
  let double = 15 * 2;
  alert(double);
}

calc();
