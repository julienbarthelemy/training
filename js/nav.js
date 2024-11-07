const primaryNav = document.querySelector(".header__nav--mobile");
const navToggle = document.querySelector(".header__nav--burger");

navToggle.addEventListener('click', () => {
    
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})