export function cardUser() {
  const userBtnEl: HTMLButtonElement = document.querySelector(".header__user-btn") as HTMLButtonElement;
  const userEl: HTMLButtonElement = document.querySelector(".user-card")as HTMLButtonElement;

  userBtnEl.addEventListener ("click", function (event) {
    event.preventDefault();
    userEl.classList.toggle("user-card--active");
    console.log("work ")
  });
}

// import { el, setAttr, mount } from "redom";


// const cardEl = el("div");

// setAttr(cardEl, {
//   className: "card", // You could also just use 'class'
// });
// const userCard:HTMLElement = document.querySelector(".user-card") as HTMLElement;
// userCard.appendChild(cardEl);
