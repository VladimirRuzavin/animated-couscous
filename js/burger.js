let burger = document.querySelector(".burger");
let burgerMenu = document.querySelector(".burger__menu");
console.log(burger);
let burgerCross = document.querySelector(".burger__cross");
let toggleMenu = function () {
  burgerMenu.classList.toggle("visible");
  burgerCross.classList.toggle("visible");
  burger.classList.toggle("invisible");
};
burger.addEventListener("click", toggleMenu);
burgerCross.addEventListener("click", toggleMenu)

//   let showMessage = function () {
//    burgerCross.classList.toggle('visible') ;
//   };
//   burgerCross.addEventListener("click", showMessage);
