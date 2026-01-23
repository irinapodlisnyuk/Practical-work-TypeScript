// export function playList(track) {


//   const catalogList = document.querySelector(".catalog__list");
//   const catalogItemEl = components.getLiEl();
//   catalogItemEl.classList.add("catalog__item");
//   catalogList.appendChild(catalogItemEl);
//   catalogItemEl.style.cursor = "pointer";

//   const productCard = components.createHtmlElement("div");
//   productCard.classList.add("product-card", "product-card--small");
//   productCard.dataset.id = `${product.id}`;
//   productCard.style.cursor = "pointer";

//   catalogItemEl.appendChild(productCard);

//   const productCardVisual = components.createHtmlElement("div", {
//     className: "product-card__visual",
//   });
//   const productCardImg = components.createHtmlElement("img");
//   productCardImg.classList.add("product-card__img");
//   productCardImg.src = `${product.image}`;

//   const productCardMore = components.createHtmlElement("div", {
//     className: "product-card__more",
//   });
//   productCardVisual.append(productCardImg, productCardMore);

//   const linkButtonIconEl = components.createHtmlElement("a", {
//     href: "#",
//     className: "product-card__link btn btn--icon",
//   });

//   const btnTextEl = components.createHtmlElement("span", {
//     className: "btn__text",
//     textContent: "В корзину",
//   });

//   const svgEl = components.getSvgEl();
//   svgEl.setAttribute("width", "24");
//   svgEl.setAttribute("height", "24");
//   svgEl.setAttribute("aria-hidden", "true");

//   linkButtonIconEl.append(btnTextEl, svgEl);

//   const useElement = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "use"
//   );
//   useElement.setAttribute("href", "images/sprite.svg#icon-basket");
//   svgEl.appendChild(useElement);

//   const linkButtonSecondaryEl = components.createHtmlElement("a", {
//     href: "#",
//     className: "product-card__link btn btn--secondary",
//   });
//   productCardMore.append(linkButtonIconEl, linkButtonSecondaryEl);

//   const textEl = components.createHtmlElement("span", {
//     className: "btn__text",
//     textContent: "Подробнее",
//   });


//   linkButtonSecondaryEl.append(textEl);

//   const productCardInfo = components.createHtmlElement("div", {
//     className: "product-card__info",
//   });
//   productCard.append(productCardVisual, productCardInfo);

//   const productCardTitle = components.getTitleEl();
//   productCardTitle.classList.add("product-card__title");
//   productCardTitle.textContent = `${product.name}`;

//   const productCardOldEl = components.createHtmlElement("span", {
//     className: "product-card__old",
//   });

//   const productCardOldNumberEl = components.createHtmlElement("span", {
//     className: "product-card__old-number",
//     textContent: `${product.price.old}`,
//   });

//   const productCardOldAddEl = components.createHtmlElement("span", {
//     className: "product-card__old-add",
//     textContent: "₽",
//   });

//   productCardOldEl.append(productCardOldNumberEl, productCardOldAddEl);

//   const productCardPriceEl = components.createHtmlElement("span", {
//     className: "product-card__price",
//   });

//   const productCardPriceNumberEl = components.createHtmlElement("span", {
//     className: "product-card__price-number",
//     textContent: ` ${product.price.new}`,
//   });

//   const productCardPriceAddEl = components.createHtmlElement("span", {
//     className: "product-card__price-add",
//     textContent: "₽",
//   });

//   productCardPriceEl.append(productCardPriceNumberEl, productCardPriceAddEl);

//   const productCardTooltipEl = components.createHtmlElement("div", {
//     className: "product-card__tooltip  tooltip",
//   });

//   productCardInfo.append(
//     productCardTitle,
//     productCardOldEl,
//     productCardPriceEl,
//     productCardTooltipEl
//   );

//   const tooltipBtn = components.getButtonEl();
//   tooltipBtn.classList.add("tooltip__btn");
//   tooltipBtn.setAttribute("aria-label", "Показать подсказку");

//   const tooltipIconEl = components.getSvgEl();
//   tooltipIconEl.setAttribute("width", "5");
//   tooltipIconEl.setAttribute("height", "10");
//   tooltipIconEl.setAttribute("aria-hidden", "true");
//   tooltipIconEl.classList.add("tooltip__icon");

//   tooltipBtn.append(tooltipIconEl);

//   const useEl = document.createElementNS("http://www.w3.org/2000/svg", "use");
//   useEl.setAttribute("href", "images/sprite.svg#icon-i");
//   tooltipIconEl.appendChild(useEl);

//   const tooltipContent = components.createHtmlElement("div", {
//     className: "tooltip__content",
//   });
//   tooltipContent.setAttribute("data-tippy-content", "Краткое описание товара");

//   productCardTooltipEl.append(tooltipBtn, tooltipContent);

//   const tooltipText = components.createHtmlElement("span", {
//     className: "tooltip__text",
//     textContent: "Наличие товара по городам:",
//   });

//   const tooltipListEl = components.getUlEl();
//   tooltipListEl.classList.add("tooltip__list");
//   tooltipContent.append(tooltipText, tooltipListEl);

//   for (let i = 0; i < 3; i++) {
//     const tooltipItemEl = document.createElement("li");
//     tooltipItemEl.classList.add("tooltip__item");
//     tooltipListEl.appendChild(tooltipItemEl);
//   }

//   const listItems = tooltipListEl.querySelectorAll(".tooltip__item");

//   const textsToAdd = ["Москва: ", "Оренбург: ", "Санкт-Петербург: "];

//   const countEl = [
//     `${product.availability.moscow}`,
//     `${product.availability.orenburg}`,
//     `${product.availability.saintPetersburg}`,
//   ];

//   listItems.forEach((item, index) => {
//     const tooltipTextEl = components.createHtmlElement("span", {
//       className: "tooltip__text",
//     });

//     if (textsToAdd[index]) {
//       tooltipTextEl.textContent = textsToAdd[index];
//     } else {
//       tooltipTextEl.textContent = "Текст по умолчанию";
//     }

//     const tooltipCountEl = components.createHtmlElement("span", {
//       className: "tooltip__count",
//     });

//     if (countEl[index]) {
//       tooltipCountEl.textContent = countEl[index];
//     } else {
//       tooltipCountEl.textContent = "Текст по умолчанию";
//     }

//     tooltipTextEl.append(tooltipCountEl);
//     item.appendChild(tooltipTextEl);
//   });

//   tippy(tooltipBtn, {
//     content: tooltipContent.innerHTML,
//     allowHTML: true,
//     arrow: false,
//     theme: "lightwhite",
//   });
//   return catalogItemEl;
// }