let burger = document.querySelector(".burger"); 
let burgerMenu = document.querySelector(".burger__menu");
console.log(burger); 
let showMessage = function () {
  burgerMenu.style.display = 'block';
};
burger.addEventListener("click", showMessage);

