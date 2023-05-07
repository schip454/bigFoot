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

// Иммитация ховер эффект на десктоп версии
const currentTabs = document.querySelectorAll(".watch__info-button");
currentTabs.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.click();
  });
});

// аккордеон мобильной версии

const panelItem = document.querySelectorAll(".watch__info-button--mob");
// panelItem.__proto__.forEach = [].__proto__.forEach;

let activePanel;
let allowClick = true;

panelItem.forEach(function (item, i, panelItem) {
  item.addEventListener("click", function (e) {
    this.classList.add("active");
    this.lastElementChild.style.display = "block";
    if (activePanel) {
      activePanel.classList.remove("active");
      activePanel.lastElementChild.style.display = "none";
    }

    activePanel = activePanel === this ? 0 : this;

    if (!allowClick) return;
    allowClick = false;
    item.classList.remove("active");
    item.lastElementChild.style.display = "none";
    setTimeout(function () {
      allowClick = true;
    }, 10000000);
    //
  });
});

// const tabButtons = document.querySelectorAll(".watch__info-button--mob");
// // const tabContentMob = document.querySelectorAll(".watch__info-content--m");

// tabButtons.forEach((item, i) => {
//   item.addEventListener("click", function (e) {
//     const content = item.querySelectorAll(".watch__info-content--m");

//     if (item.classList.contains("active")) {
//       console.log(i);
//       this.classList.remove("active");
//       content.forEach((elem) => {
//         elem.style.display = "none";
//       });
//     } else {
//       item[i].classList.remove("active");
//       this.classList.add("active");
//       content.forEach((elem) => {
//         elem.style.display = "block";
//       });
//     }
//   });
// });

// // аккордеон мобильной версии
// var panelItem = document.querySelectorAll(".watch__info-button--mob"),
//   active = document.getElementsByClassName("active");

// Array.from(panelItem).forEach(function (item, i, panelItem) {
//   item.addEventListener("click", function (e) {
//     if (active.length > 0 && active[0] !== this)
//       // если есть активный элемент, и это не тот по которому кликнули
//       active[0].classList.remove("active"); // убрать класс panel-active

//     // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
//     this.querySelector(".watch__info-content--m").classList.toggle(
//       "watch__info-content-active--m"
//     );
//     this.classList.toggle("active");
//   });
// });

// const panelItem = document.querySelectorAll(".watch__info-button--mob");
// panelItem.__proto__.forEach = [].__proto__.forEach;

// let activePanel;
// panelItem.forEach((item) => {
//   item.addEventListener("click", function (e) {
//     this.classList.remove("active");
//     this.querySelector(".watch__info-content--m").classList.remove(
//       "watch__info-content-active--m"
//     );

//     if (activePanel) {
//       activePanel.classList.remove("active");
//       activePanel
//         .querySelector(".watch__info-content--m")
//         .classList.add("watch__info-content-active--m");
//     }
//     activePanel = activePanel === this ? 0 : this;
//   });
// });

// var activePanel;
// panelItem.forEach(function (item, i, panelItem) {
//   item.addEventListener("click", function (e) {
//     //show new thingy;
//     // item.classList.remove("active");
//     this.classList.add("active");
//     this.lastElementChild.classList.remove("watch__info-content-active--m");
//     //hide old thingy
//     if (activePanel) {
//       activePanel.classList.remove("active");
//       activePanel.lastElementChild.classList.add(
//         "watch__info-content-active--m"
//       );
//     }
//     //update thingy
//     activePanel = activePanel === this ? 0 : this;
//   });
// });

// const panelItem = document.querySelectorAll(".watch__info-button--mob");
// panelItem.__proto__.forEach = [].__proto__.forEach;

// let activePanel;
// panelItem.forEach(function (item, i, panelItem) {
//   item.addEventListener("click", function (e) {
//     console.log(item);
//     // item.classList.remove("active");
//     this.classList.add("active");
//     // this.lastElementChild.classList.remove("watch__info-content-active--m");
//     this.querySelector(".watch__info-content--m").style.display = "block";
//     // activePanel.lastElementChild.classList.remove("hidden");
//     // this.querySelector(".watch__info-content--m").classList.remove("hidden");

//     // this.querySelector(".watch__info-content--m").classList.remove(
//     //   "watch__info-content-active--m"
//     // );

//     // if (!this.classList.add("active")) {
//     //   this.classList.add("active");
//     // }

//     if (activePanel) {
//       activePanel.classList.remove("active");
//       // activePanel
//       //   .querySelector(".watch__info-content--m")
//       //   .classList.add("watch__info-content-active--m");
//       // activePanel
//       //   .querySelector(".watch__info-content--m")
//       //   .classList.add("hidden");
//       activePanel.lastElementChild.style.display = "none";
//       // activePanel.lastElementChild.classList.add(
//       //   "watch__info-content-active--m"
//       // );
//     }

//     activePanel = activePanel === this ? 0 : this;
//   });
// });
