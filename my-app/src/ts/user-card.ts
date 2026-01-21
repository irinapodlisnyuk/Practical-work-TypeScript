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

  const hEl = el("h2", "USER");
  setAttr(hEl, {
    className: "user-card__title",
  });

  const buttonEl = el("button", { type: "button" });
  setAttr(buttonEl, {
    className: "user-card__close",
  });

  const svgEl = svg(
    "svg",
    svg("use", { xlink: { href: "./images/sprite.svg#icon-close" } }),
  );
  setAttr(svgEl, {
    className: "user-card__icon",
    wedth: "25",
    height: "24" // You could also just use 'class'
  });
  buttonEl.append(svgEl);
  headingEl.append(hEl, buttonEl);
  cardEl.appendChild(headingEl);
  headerCard.appendChild(cardEl);
}

window.addEventListener("DOMContentLoaded", () => {

  cardUser();
});
