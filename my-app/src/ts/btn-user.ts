export function btnUser() {
  const userBtnEl: HTMLElement = document.querySelector(
    ".header__user-btn",
  ) as HTMLElement;

  const headerCard: HTMLElement = document.querySelector(
    ".header__card",
  ) as HTMLElement;
  headerCard.classList.add("user-card");
  
  const userEl: HTMLElement = document.querySelector(
    ".user-card",
  ) as HTMLElement;

  userBtnEl?.addEventListener("click", function (event) {
    event.preventDefault();
    userEl.classList.add("user-card--active");

    const closeEl: HTMLElement = document.querySelector(
      ".user-card__close",
    ) as HTMLElement;
    if (closeEl) {
      closeEl?.addEventListener("click", function (event) {
        event.preventDefault();
        userEl.classList.remove("user-card--active");
      });
    }
  });
}
