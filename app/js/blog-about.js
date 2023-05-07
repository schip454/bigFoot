// filter
const filterBtn = document.querySelector(".content-blog__filter");
const filterContent = document.querySelector(".filter__content");

filterBtn.addEventListener("click", () => {
  filterBtn.classList.toggle("active");
  filterContent.classList.toggle("filter__content--open");

  // const defaultRadioBtn = document.querySelector("#radio-1");
  // defaultRadioBtn.checked = true;

  // for (const checkbox of checkboxButtons) {
  //   checkbox.checked = false;
  // }
  // clearFilterBtn.style.display = "none";
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
        item.style.display = "block";
        value.remove();
        item.dataset.card = "open";
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
const filterAddBoxTable = document.querySelector(".filter__addbox--table");
const filterAddBoxMob = document.querySelector(".filter__addbox--mob");
const submitBtn = document.querySelector(".filter__content-submitbtn");

setInterval(() => {
  const filterAddedContentAll = document.querySelectorAll(".filter__add");

  for (const filterContent of filterAddedContentAll) {
    filterContent.addEventListener("click", (e) => {
      const target = e.target;

      target.remove();

      // сброс баттонов
      radioButtons.forEach((radio) => {
        if (!e.target.value === radio.innerText) {
          radio.checked = false;
        }
      });
      checkboxButtons.forEach((checkbox) => {
        checkbox.checked = false;
      });
      clearFilterBtn.style.display = "none";

      // const defaultRadioBtn = document.querySelector("#radio-1");
      // defaultRadioBtn.checked = true;
    });
  }
}, 1000);

clearFilterBtn.addEventListener("click", (e) => {
  radioButtons.forEach((radio) => {
    if (!e.target.value === radio.innerText) {
      radio.checked = false;
    }
  });
  checkboxButtons.forEach((checkbox) => {
    checkbox.checked = false;
  });

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
  clearFilterBtn.style.display = "none";

  filterBtn.classList.remove("active");
  filterContent.classList.remove("filter__content--open");

  const defaultRadioBtn = document.querySelector("#radio-1");
  defaultRadioBtn.checked = true;
});

for (const radio of radioButtons) {
  radio.addEventListener("click", () => {
    const radioText = radio.nextElementSibling.innerText;

    const addFilterHTML = document.createElement("div");
    addFilterHTML.classList.add("filter__add");
    addFilterHTML.textContent = radioText;
  });
}

submitBtn.addEventListener("click", () => {
  filterAddBox.innerHTML = "";
  checkboxButtons.forEach((checkbox) => {
    if (!checkbox.checked) return;

    const checkboxText =
      checkbox.nextElementSibling.nextElementSibling.innerText;
    const addFilterHTML = document.createElement("div");
    addFilterHTML.classList.add("filter__add");
    addFilterHTML.textContent = checkboxText;

    if (document.documentElement.clientWidth < 768) {
      filterAddBoxMob.appendChild(addFilterHTML);
    } else if (document.documentElement.clientWidth < 1024) {
      filterAddBoxTable.appendChild(addFilterHTML);
    } else {
      filterAddBox.appendChild(addFilterHTML);
    }
    // checkbox.checked = false;
  });

  radioButtons.forEach((radio) => {
    if (!radio.checked) return;

    const radioText = radio.nextElementSibling.innerText;
    const addFilterHTML = document.createElement("div");
    addFilterHTML.classList.add("filter__add");
    addFilterHTML.textContent = radioText;

    if (document.documentElement.clientWidth < 768) {
      filterAddBoxMob.appendChild(addFilterHTML);
    } else if (document.documentElement.clientWidth < 1024) {
      filterAddBoxTable.appendChild(addFilterHTML);
    } else {
      filterAddBox.appendChild(addFilterHTML);
    }
  });

  filterBtn.classList.remove("active");
  filterContent.classList.remove("filter__content--open");
});

// скрывает кнопку отчистить все в радиокнопках
for (const radio of radioButtons) {
  if (!radio.checked) {
    clearFilterBtn.style.display = "none";
  }
  radio.addEventListener("click", () => {
    if (radio.checked) {
      clearFilterBtn.style.display = "inline-block";
    }
  });
}

// скрывает кнопку отчистить все в чекбоксах
for (const checkbox of checkboxButtons) {
  if (!checkbox.checked) {
    clearFilterBtn.style.display = "none";
  }
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      clearFilterBtn.style.display = "inline-block";
    }
  });
}

// mobile filter
const filterContentCloseBtnCat = document.querySelector(
  ".filter__content-closebtn--categories"
);
const filterContentSpaceOnClickToCat = document.querySelector(
  ".filter__content-titlebox--cat"
);
const filterContentCloseBtnTag = document.querySelector(
  ".filter__content-closebtn--tags"
);
const filterContentSpaceOnClickToTag = document.querySelector(
  ".filter__content-titlebox--tags"
);
const insideFilterContent = document.querySelector(".filter__content-list");
const insideFilterContentTags = document.querySelector(
  ".filter__content-listwrapper"
);

filterContentSpaceOnClickToCat.addEventListener("click", () => {
  filterContentCloseBtnCat.classList.toggle("open-btn");
  insideFilterContent.classList.toggle("hidden");
});

filterContentCloseBtnTag.classList.add("open-btn");

filterContentSpaceOnClickToTag.addEventListener("click", () => {
  if (insideFilterContentTags.classList.contains("hidden")) {
    filterContentCloseBtnTag.classList.remove("open-btn");
    insideFilterContentTags.classList.remove("hidden");
  } else {
    insideFilterContentTags.classList.add("hidden");
    filterContentCloseBtnTag.classList.add("open-btn");
  }
});

// for (const checkbox of checkboxButtons) {
//   checkbox.addEventListener("click", () => {
//     submitBtn.addEventListener("click", (e) => {
//       const checkboxText =
//         checkbox.nextElementSibling.nextElementSibling.innerText;

//       const addFilterHTML = document.createElement("div");
//       addFilterHTML.classList.add("filter__add");
//       addFilterHTML.textContent = checkboxText;

//       if (document.documentElement.clientWidth < 1024) {
//         filterAddBoxMob.appendChild(addFilterHTML);
//       } else {
//         filterAddBox.appendChild(addFilterHTML);
//       }
//       checkbox.checked = false;

//       if (document.documentElement.clientWidth < 1024) {
//         filterAddBoxMob.removeChild(addFilterHTML.previousElementSibling);
//       } else {
//         filterAddBox.removeChild(addFilterHTML.previousElementSibling);
//       }
//     });
//   });
// }
