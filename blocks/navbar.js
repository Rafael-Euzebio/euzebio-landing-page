const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("main > section");

if (navbar) {
  const links = navbar.querySelectorAll(".link:not(.link--button)");
  const casesLink = navbar.querySelector('.link[href="#casos"]');
  const contactLink = navbar.querySelector(".link--button");
  let observer;
  let currentTheme = null;

  const setTheme = (theme) => {
    if (theme === currentTheme) return;

    if (currentTheme) navbar.classList.remove(`navbar--${currentTheme}`);
    if (theme) navbar.classList.add(`navbar--${theme}`);
    currentTheme = theme;

    const isActive = theme !== null;
    links.forEach((link) => link.classList.toggle("link--paper", isActive));
    casesLink?.classList.toggle("link--hover-forest", !isActive);
    casesLink?.classList.toggle("link--hover-paper", isActive);
    contactLink?.classList.toggle("link--button-slate", !isActive);
    contactLink?.classList.toggle("link--button-inverted-themed", isActive);
  };

  const observeSections = () => {
    observer?.disconnect();

    const navbarHeight = Math.ceil(navbar.getBoundingClientRect().height);
    const themeOffset = 64;
    const triggerPosition = navbarHeight + themeOffset;
    const bottomMargin = Math.max(0, window.innerHeight - triggerPosition - 1);

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(entry.target.dataset.navbarTheme || null);
          }
        });
      },
      { rootMargin: `-${triggerPosition}px 0px -${bottomMargin}px 0px` }
    );
    sections.forEach((section) => observer.observe(section));
  };

  observeSections();
  window.addEventListener("resize", observeSections);
  new ResizeObserver(observeSections).observe(navbar);
}
