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

// //задание 1
// function sayHello(from, text) {
//     console.log (from + ": " + text)
// }

// sayHello("Вова", "Привет")

// //задание 2
// function sum(x, y) {
//   return x + y;
// }

// let result = sum(1, 1);
// alert(result);

// //задание 3
// let calcSquare = (a) => {
//   let result = a * 2;
//   return result;
// };

// alert(calcSquare(15));

// //задание 4
// function calc() {
//   let double = 15 * 2;
//   alert(double);
// }

// calc();

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year == 2015) {
//   alert( 'Да вы знаток!' );
// } else {
//   alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }

let car = {
  model: "audi",
  year: 2016,
  speed: 0,
  speedUp: function() {
    this.speed += 100;
    console.log(car.speed);
  },
};

car.speedUp()
car.speedUp()
// console.log(car);
