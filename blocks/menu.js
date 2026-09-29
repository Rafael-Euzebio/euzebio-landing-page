const menu = document.querySelector(".menu");

if (menu) {
  const toggle = menu.querySelector(".menu__toggle");
  const menuList = menu.querySelector(".menu__list");
  const breakpoint = getComputedStyle(document.documentElement)
    .getPropertyValue("--breakpoint-wide")
    .trim();
  const compactLayout = window.matchMedia(`(max-width: ${breakpoint})`);

  const setMenuOpen = (isOpen, animate = true) => {
    const shouldAnimate = animate && compactLayout.matches;

    menu.classList.toggle("menu--animating", shouldAnimate);
    if (shouldAnimate) menuList.getBoundingClientRect();

    menu.classList.toggle("menu--open", isOpen);
    toggle.classList.toggle("menu__toggle--open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  };

  menuList.addEventListener("transitionend", (event) => {
    if (event.propertyName === "transform") {
      menu.classList.remove("menu--animating");
    }
  });

  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  menuList.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  menu.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  compactLayout.addEventListener("change", (event) => {
    if (!event.matches) setMenuOpen(false, false);
  });
}
