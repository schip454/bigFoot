// filter
const filterBtn = document.querySelector(".content-blog__filter");
const filterContent = document.querySelector(".filter__content");

filterBtn.addEventListener("click", () => {
  filterBtn.classList.toggle("active");
  filterContent.classList.toggle("filter__content--open");
});

// select
document.querySelectorAll(".dropdown").forEach((dropDownWrapper) => {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown__list-item"
  );
  const dropDownInput = dropDownWrapper.querySelector(
    ".dropdown__input-hidden"
  );

  dropDownBtn.addEventListener("click", function () {
    dropDownList.classList.toggle("dropdown__list-visible");
    this.classList.toggle("dropdown__button--active");
  });

  dropDownListItems.forEach((listItem) => {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove("dropdown__list-visible");
    });
  });

  // клик снаружи дропдауна
  document.addEventListener("click", (e) => {
    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove("dropdown__list-visible");
      dropDownBtn.classList.remove("dropdown__button--active");
    }
  });

  // закрытие на esc или tab
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab" || e.key === "Escape") {
      dropDownList.classList.remove("dropdown__list-visible");
      dropDownBtn.classList.remove("dropdown__button--active");
    }
  });
});

// Показывает контент по клику на кнопку Показать больше статей
const buttons = document.querySelectorAll(".more-btn");
const hiddenCards = document.querySelectorAll("[data-card]");

buttons.forEach((value) => {
  value.addEventListener("click", (e) => {
    e.preventDefault();
    hiddenCards.forEach((item) => {
      if (item.dataset.card === "hidden") {
        item.classList.remove("bounceOut");
        item.classList.add("fadeInUp");

        setTimeout(() => {
          item.style.display = "block";
        }, 200);
        value.textContent = "Скрыть";
        item.dataset.card = "open";
      } else if (item.dataset.card === "open") {
        item.classList.remove("fadeInUp");
        item.classList.add("bounceOut");
        value.textContent = "Показать больше статей";
        item.dataset.card = "hidden";
        setTimeout(() => {
          item.style.display = "none";
        }, 500);
      }
    });
  });
});

// работа с фильтром
// сброс фильтров и добавление
const clearFilterBtn = document.querySelector(".filter__content-btn");
const radioButtons = document.querySelectorAll("input[type='radio']");
const checkboxButtons = document.querySelectorAll("input[type='checkbox']");
const filterAddBox = document.querySelector(".filter__addbox");
setInterval(() => {
  const filterAddedContentAll = document.querySelectorAll(".filter__add");

  for (const filterContent of filterAddedContentAll) {
    filterContent.addEventListener("click", (e) => {
      const target = e.target;
      target.remove();
    });
  }
}, 1000);

clearFilterBtn.addEventListener("click", () => {
  for (const radio of radioButtons) {
    radio.checked = false;
  }
  for (const checkbox of checkboxButtons) {
    checkbox.checked = false;
  }
  const filterAddedContentAll = document.querySelectorAll(".filter__add");
  filterAddedContentAll.forEach((item) => {
    item.remove();
    for (const radio of radioButtons) {
      radio.checked = false;
    }
    for (const checkbox of checkboxButtons) {
      checkbox.checked = false;
    }
  });
});

for (const radio of radioButtons) {
  radio.addEventListener("click", () => {
    const radioText = radio.nextElementSibling.innerText;

    const addFilterHTML = document.createElement("div");
    addFilterHTML.classList.add("filter__add");
    addFilterHTML.textContent = radioText;

    filterAddBox.appendChild(addFilterHTML);
  });
}

for (const checkbox of checkboxButtons) {
  checkbox.addEventListener("click", () => {
    const checkboxText =
      checkbox.nextElementSibling.nextElementSibling.innerText;

    const addFilterHTML = document.createElement("div");
    addFilterHTML.classList.add("filter__add");
    addFilterHTML.textContent = checkboxText;

    filterAddBox.appendChild(addFilterHTML);
  });
}
