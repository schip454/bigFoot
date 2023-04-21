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
    // по ховеру переход к слайду
    item.click();

    document.querySelectorAll(".ticker").forEach((item) => {
      item.classList.add("stop");
    });

    item.addEventListener("mouseout", () => {
      document.querySelectorAll(".ticker").forEach((item) => {
        item.classList.remove("stop");
      });
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

// перетаскивание туда сюда
window.addEventListener(
  "load",
  function () {
    const ticker = document.querySelectorAll(".ticker__item");
    ticker.forEach((item) => {
      let boxleft;
      let startx;
      let dist = 0;
      let touchobj = null;
      item.addEventListener(
        "touchstart",
        function (e) {
          touchobj = e.changedTouches[0];
          boxleft = 0;
          startx = parseInt(touchobj.clientX);
          e.preventDefault();
        },
        false
      );
      item.addEventListener(
        "touchmove",
        function (e) {
          touchobj = e.changedTouches[0];
          let dist = parseInt(touchobj.clientX) - startx;

          item.style.transform = `translateX(${boxleft + dist}px)`;
          item.style.transition = "none";

          item.click();
          item.style.color = "#000";

          document.querySelectorAll(".ticker").forEach((item) => {
            item.classList.add("stop");
          });

          e.preventDefault();
        },
        false
      );
      item.addEventListener("touchend", () => {
        item.style.transform = `translateX(0px)`;
        item.style.transition = "0.3s ease";

        item.style.color = "transparent";

        document.querySelectorAll(".ticker").forEach((item) => {
          item.classList.remove("stop");
        });
      });
      item.addEventListener("click", () => {
        console.log("click");
      });
    });
  },
  false
);
