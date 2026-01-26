import { el, setAttr, text } from "redom";
import { svg, mount } from "redom";

export function cardUser() {
  const headerCard: HTMLElement = document.querySelector(
    ".header__card",
  ) as HTMLElement;
  headerCard.classList.add("user-card");

  const cardEl = el("div");
  setAttr(cardEl, {
    className: "user-card__wrapper",
  });

  const headingEl = el("div");
  setAttr(headingEl, {
    className: "user-card__heading",
  });

  const topEl = el("div");
  setAttr(topEl, {
    className: "user-card__top",
  });

  const bottomEl = el("div");
  setAttr(bottomEl, {
    className: "user-card__bottom",
  });

  const hEl = el("h2", "USER");
  setAttr(hEl, {
    className: "user-card__title",
  });

  const h3El = el("h3", "Данный раздел находится в разработке. Спасибо за понимание!!!");
  setAttr(h3El, {
    className: "user-card__error",
  });

  const buttonEl = el("button", { type: "button" });
  setAttr(buttonEl, {
    className: "user-card__close",
  });

  const buttonExitEl = el("button", "Покинуть профиль", { type: "button" });
  setAttr(buttonExitEl, {
    className: "user-card__exit",
  });

  const buttonRedactionEl = el("button", "Редактировать профиль", {
    type: "button",
  });
  setAttr(buttonRedactionEl, {
    className: "user-card__buttonRedactionEl",
  });

  const svgEl = svg(
    "svg",
    svg("use", { xlink: { href: "./images/sprite.svg#icon-close" } }),
  );
  setAttr(svgEl, {
    className: "user-card__icon",
    wedth: "25",
    height: "24", // You could also just use 'class'
  });

  const imgUserEl = el("img");
  setAttr(imgUserEl, {
    className: "user-card__img",
    wedth: "25",
    height: "25",
    src: "../images/foto-user-dekstop.png",
    // You could also just use 'class'
  });

  bottomEl.appendChild(buttonRedactionEl);
  bottomEl.appendChild(buttonExitEl);
  buttonEl.append(svgEl);
  headingEl.append(buttonEl,hEl, imgUserEl);
  topEl.appendChild(h3El);
  cardEl.appendChild(headingEl);
  cardEl.appendChild(topEl);
  cardEl.appendChild(bottomEl);
  headerCard.appendChild(cardEl);
}
