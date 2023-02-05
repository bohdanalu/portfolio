const burger = document.querySelector(".burger");
const burgerLines = document.querySelectorAll(".burger-line");
const menu = document.querySelector(".header__top");
const body = document.querySelector("body");
const mode = document.querySelectorAll(".mode__list");

burger.addEventListener("click", toggleBurger);
menu.addEventListener("click", clickMenu);

for (const element of mode) {
  element.addEventListener("click", toggleMode);
}

function toggleBurger() {
  menu.classList.toggle("active");
  body.classList.toggle("lock");

  for (const line of burgerLines) {
    line.classList.toggle("active");
  }
}

function clickMenu(event) {
  if (event.target.classList.contains("header__link")) {
    body.classList.remove("lock");
    menu.classList.remove("active");

    for (const line of burgerLines) {
      line.classList.remove("active");
    }
  }
}

function toggleMode(event) {
  curentelement = event.target.parentElement;

  let nextSibling = curentelement.nextElementSibling;
  let prevSibling = curentelement.previousElementSibling;
  let siblings = [];

  const rootEl = document.documentElement;

  curentelement.classList.add("active");

  curentelement.firstElementChild.classList.contains("fa-moon")
    ? rootEl.setAttribute("data-theme", "dark")
    : rootEl.setAttribute("data-theme", "light");

  while (nextSibling) {
    siblings.push(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
  }
  while (prevSibling) {
    siblings.push(prevSibling);
    prevSibling = prevSibling.previousElementSibling;
  }

  for (let sibling of siblings) {
    sibling.classList.remove("active");
  }
}
