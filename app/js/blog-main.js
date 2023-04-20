// слайдер
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const menu = ["африка", "камчатка", "африка", "камчатка"];

const swiper = new Swiper(".blog-main__slider", {
  loop: true,
  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
          <div class="${className}">
          <div class="ticker">
            <div class="ticker__item">${menu[index]}</div>
          </div>
          </div>`;
    },
  },
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
});

// бегущая строка
const ticker = document.querySelectorAll(".ticker__item");
ticker.forEach((item) => {
  item.addEventListener("mouseover", () => {
    document.querySelectorAll(".ticker").forEach((item) => {
      item.classList.add("stop");
    });
    item.addEventListener("mouseout", () => {
      document.querySelectorAll(".ticker").forEach((item) => {
        item.classList.remove("stop");
      });
    });

    item.addEventListener("click", () => {
      document.querySelectorAll(".ticker").forEach((item) => {
        item.classList.add("stop");
      });
    });
    item.addEventListener("touchstart", () => {
      document.querySelectorAll(".ticker").forEach((item) => {
        item.classList.add("stop");
      });
      console.log("touchstart");
    });
    item.addEventListener("touchend", () => {
      document.querySelectorAll(".ticker").forEach((item) => {
        item.classList.remove("stop");
      });
      console.log("touchend");
    });
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
