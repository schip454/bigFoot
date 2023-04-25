// Табы
const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) => {
  const header = document.querySelector(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = display;

    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;

    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

tabs(
  ".watch__info-box",
  ".watch__info-button",
  ".watch__info-content",
  "active"
);
tabs(
  ".watch__mobile",
  ".watch__info-button--mob",
  ".watch__info-content--m",
  "active"
);

const tabButtons = document.querySelectorAll(".watch__info-button--mob");
const tabContentMob = document.querySelectorAll(".watch__info-content--m");
tabButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("click", e.target);
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      tabContentMob.forEach((item) => {
        item.style.display = "none";
      });
    } else {
      item.classList.add("active");
      tabContentMob.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

// Иммитация ховер эффект на десктоп версии
const currentTabs = document.querySelectorAll(".watch__info-button");
currentTabs.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.click();
  });
});
