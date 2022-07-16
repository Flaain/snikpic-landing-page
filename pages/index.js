const burgerIcon = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const headerRight = document.querySelector(".header__right");
const body = document.body;

if (menu && burgerIcon) {
    burgerIcon.addEventListener("click", () => {
        menu.classList.toggle("active__header");
        burgerIcon.classList.toggle("active__header");
        headerRight.classList.toggle("active__header-btns");
        body.classList.toggle("scroll-lock");
    });

    menu.querySelectorAll(".header__link").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("active__header");
            burgerIcon.classList.remove("active__header");
            headerRight.classList.remove("active__header-btns");
            body.classList.remove("scroll-lock");
        });
    });
}

const languageDropDown = document.querySelectorAll(".language-dropdown");

languageDropDown.forEach((dropdown) => {
    const select = dropdown.querySelector(".language-dropdown__select");
    const caret = dropdown.querySelector(".language-dropdown__caret");
    const list = dropdown.querySelector(".language-dropdown__list");
    const item = dropdown.querySelectorAll(".language-dropdown__item");
    const selected = dropdown.querySelector(".language-dropdown__selected");

    select.addEventListener("click", () => {
        select.classList.toggle("language-dropdown__select-clicked");
        caret.classList.toggle("language-dropdown__caret-rotate");
        list.classList.toggle("language-dropdown__list-open");
    });
    item.forEach((option) => {
        option.addEventListener("click", () => {
            selected.innerText = option.innerText;
            select.classList.remove("language-dropdown__select-clicked");
            caret.classList.remove("language-dropdown__caret-rotate");
            list.classList.remove("language-dropdown__list-open");
            item.forEach((option) => {
                option.classList.remove("active__language-dropdown");
            });
            option.classList.add("active__language-dropdown");
        });
    });
});

const tabsBtn = document.querySelectorAll(".tabs-section__btn");
const tabsItems = document.querySelectorAll(".tabs-section__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains("tabs-section__btn_active")) {
            tabsBtn.forEach(function(item) {
                item.classList.remove("tabs-section__btn_active");
            });
            tabsItems.forEach(function(item) {
                item.classList.remove("tabs-section__item_active");
            });
            currentBtn.classList.add("tabs-section__btn_active");
            currentTab.classList.add("tabs-section__item_active");
        }
    });
}

document.querySelector(".tabs-section__btn").click();