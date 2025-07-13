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