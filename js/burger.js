let burger = document.querySelector(".burger"); 
let burgerMenu = document.querySelector(".burger__menu");
console.log(burger); 
let burgerLogo = document.querySelector(".burger__logo");
;

let hideMessage = function () {
 burgerMenu.classList.toggle('visible') ;
};
burger.addEventListener("click", hideMessage);

let showMessage = function () {
 burgerLogo.classList.toggle('invisible') ;
};
burgerLogo.addEventListener("click", showMessage);