const navbar = document.querySelector(".navbar");
const cases = document.querySelector("#casos");

if (navbar && cases) {
  const menu = navbar.querySelector(".menu");
  const links = navbar.querySelectorAll(".link:not(.link--button)");
  const casesLink = navbar.querySelector('.link[href="#casos"]');
  const contactLink = navbar.querySelector(".link--button");
  let observer;

  const setForestTheme = (isActive) => {
    navbar.classList.toggle("navbar--forest", isActive);
    menu?.classList.toggle("menu--forest", isActive);
    links.forEach((link) => link.classList.toggle("link--paper", isActive));
    casesLink?.classList.toggle("link--hover-forest", !isActive);
    casesLink?.classList.toggle("link--hover-paper", isActive);
    contactLink?.classList.toggle("link--button-slate", !isActive);
    contactLink?.classList.toggle("link--button-inverted-forest", isActive);
  };

  const observeCases = () => {
    observer?.disconnect();

    const navbarHeight = Math.ceil(navbar.getBoundingClientRect().height);
    const themeOffset = 64;
    const triggerPosition = navbarHeight + themeOffset;
    const bottomMargin = Math.max(0, window.innerHeight - triggerPosition - 1);

    observer = new IntersectionObserver(
      ([entry]) => setForestTheme(entry.isIntersecting),
      { rootMargin: `-${triggerPosition}px 0px -${bottomMargin}px 0px` }
    );
    observer.observe(cases);
  };

  observeCases();
  window.addEventListener("resize", observeCases);
  new ResizeObserver(observeCases).observe(navbar);
}
