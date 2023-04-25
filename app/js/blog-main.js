// слайдер
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const menu = ["африка", "камчатка", "африка", "камчатка", "африка", "камчатка"];

const swiper = new Swiper(".blog-main__slider", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // cssMode: true,
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     translate: [0, 0, -400],
  //   },
  //   next: {
  //     translate: ["100%", 0, 0],
  //   },
  // },

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

        // setTimeout(() => {
        item.style.display = "block";
        // }, 200);
        // value.textContent = "Скрыть";
        value.remove();
        item.dataset.card = "open";
      }
      // else if (item.dataset.card === "open") {
      //   item.classList.remove("fadeInUp");
      //   item.classList.add("bounceOut");
      //   value.textContent = "Показать больше статей";
      //   item.dataset.card = "hidden";
      //   setTimeout(() => {
      //     item.style.display = "none";
      //   }, 500);
      // }
    });
  });
});

// перетаскивание туда сюда
window.addEventListener(
  "load",
  function () {
    const ticker = document.querySelectorAll(".ticker__item");
    // const tickerHeader = document.querySelectorAll(".swiper-pagination");
    ticker.forEach((item) => {
      // let boxleft;
      // let startx;
      // let dist = 0;
      // let touchobj = null;
      // item.addEventListener(
      //   "touchstart",
      //   function (e) {
      //     touchobj = e.changedTouches[0];
      //     boxleft = 0;
      //     startx = parseInt(touchobj.clientX);
      //     e.preventDefault();
      //   },
      //   false
      // );
      item.addEventListener(
        "touchmove",
        function (e) {
          // touchobj = e.changedTouches[0];
          // let dist = parseInt(touchobj.clientX) - startx;

          // item.style.transform = `translateX(${boxleft + dist}px)`;
          // item.style.transition = "none";

          item.click();
          item.style.color = "#000";

          document.querySelectorAll(".ticker").forEach((item) => {
            item.classList.add("stop");
          });

          // e.preventDefault();
        },
        false
      );
      item.addEventListener("touchend", () => {
        // item.style.transform = `translateX(0px)`;
        // item.style.transition = "0.3s ease";

        item.style.color = "transparent";

        document.querySelectorAll(".ticker").forEach((item) => {
          item.classList.remove("stop");
        });
      });
    });
  },
  false
);

// window.addEventListener(
//   "load",
//   function () {
//     const ticker = document.querySelectorAll(".ticker__item");
//     const tickerHeader = document.querySelectorAll(".swiper-pagination");

//     ticker.forEach((item) => {
//       let boxleft;
//       let startx;
//       let dist = 0;
//       let touchobj = null;
//       item.addEventListener(
//         // "touchstart",
//         "mousedown",
//         function (e) {
//           // touchobj = e.changedTouches[0];
//           boxleft = 0;
//           console.log(item.offsetWidth);
//           // startx = parseInt(touchobj.clientX);
//           e.preventDefault();
//         },
//         false
//       );
//       item.addEventListener(
//         // "touchmove",
//         "mousemove ",
//         function (e) {
//           console.log(e, "ebat");
//           // touchobj = e.changedTouches[0];
//           let dist = parseInt(touchobj.clientX) - startx;

//           // item.style.transform = `translateX(${boxleft + dist}px)`;
//           item.style.transform = `translateX(100px)`;
//           item.style.transition = "none";

//           item.click();
//           item.style.color = "#000";

//           document.querySelectorAll(".ticker").forEach((item) => {
//             item.classList.add("stop");
//           });

//           e.preventDefault();
//         },
//         false
//       );
//       // item.addEventListener("touchend", () => {
//       item.addEventListener("mouseup", () => {
//         item.style.transform = `translateX(0px)`;
//         item.style.transition = "0.3s ease";

//         item.style.color = "transparent";

//         document.querySelectorAll(".ticker").forEach((item) => {
//           item.classList.remove("stop");
//         });
//       });
//     });
//   },
//   false
// );

// window.addEventListener(
//   "load",
//   function () {
//     const ticker = document.querySelectorAll(".ticker__item");

//     ticker.forEach((item) => {
//       item.addEventListener(
//         // "mouseover",
//         "touchstart",
//         function (e) {
//           e.preventDefault();
//         },
//         false
//       );
//       item.addEventListener(
//         // "mousedown",
//         "touchmove",
//         function (e) {
//           item.click();
//           item.style.color = "#000";

//           document.querySelectorAll(".ticker").forEach((item) => {
//             item.classList.add("stop");
//           });

//           e.preventDefault();
//         },
//         false
//       );
//       // item.addEventListener("mouseup", () => {
//       item.addEventListener("touchend", () => {
//         item.style.color = "transparent";

//         document.querySelectorAll(".ticker").forEach((item) => {
//           item.classList.remove("stop");
//         });
//       });
//     });
//   },
//   false
// );

//  ---------------------------

// let draggableElen = document.querySelector(".blog-main__question");
// let pagination = document.querySelector(".swiper-pagination");
// let initialX = 0;
// let initialY = 0;
// let moveElem = false;

// let events = {
//   mouse: {
//     down: "mousedown",
//     move: "mousemove",
//     up: "mouseup",
//   },
//   touch: {
//     down: "touchstart",
//     move: "touchmove",
//     up: "touchend",
//   },
// };

// let deviceType = "";

// const isTouchDevice = () => {
//   try {
//     document.createEvent("TouchEvent");
//     deviceType = "touch";
//     return true;
//   } catch (err) {
//     deviceType = "mouse";
//     return false;
//   }
// };
// isTouchDevice();

// pagination.addEventListener(events[deviceType].down, (e) => {
//   e.preventDefault();
//   initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
//   initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

//   moveElem = true;
// });

// pagination.addEventListener(events[deviceType].move, (e) => {
//   if (moveElem) {
//     e.preventDefault();
//     let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
//     let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

//     pagination.style.left = pagination.offsetLeft - (initialX - newX) + "px";

//     initialX = newX;
//     initialY = newY;
//   }
// });

// // draggableElen.addEventListener(
// //   events[deviceType].up,
// //   (stopMovement = (e) => {
// //     moveElem = false;
// //   })
// // );

// // draggableElen.addEventListener("mouseleave", stopMovement);
// draggableElen.addEventListener(events[deviceType].up, (e) => {
//   moveElem = false;
// });

//  ---------------------------

// window.addEventListener(
//   "load",
//   function () {
//     const ticker = document.querySelectorAll(".ticker__item");
//     const tickerHeader = document.querySelectorAll(".swiper-pagination");

//     tickerHeader.forEach((item) => {
//       let boxleft;
//       let startx;
//       let dist = 0;
//       let touchobj = null;
//       item.addEventListener(
//         "touchstart",
//         function (e) {
//           touchobj = e.changedTouches[0];
//           boxleft = 0;
//           startx = parseInt(touchobj.clientX);
//           e.preventDefault();
//         },
//         false
//       );
//       item.addEventListener(
//         "touchmove",
//         function (e) {
//           touchobj = e.changedTouches[0];
//           let dist = parseInt(touchobj.clientX) - startx;

//           item.style.transform = `translateX(${boxleft + dist}px)`;
//           item.style.transition = "none";

//           item.click();
//           item.style.color = "#000";

//           document.querySelectorAll(".ticker").forEach((item) => {
//             item.classList.add("stop");
//           });

//           e.preventDefault();
//         },
//         false
//       );
//       item.addEventListener("touchend", () => {
//         item.style.transform = `translateX(0px)`;
//         item.style.transition = "0.3s ease";

//         item.style.color = "transparent";

//         document.querySelectorAll(".ticker").forEach((item) => {
//           item.classList.remove("stop");
//         });
//       });
//       item.addEventListener("click", () => {
//         console.log("click");
//       });
//     });
//   },
//   false
// );

const tickerItem = document.querySelectorAll(".ticker__item");

let pagination = document.querySelector(".swiper-pagination");
let initialX = 0;
let initialY = 0;
let moveElem = false;

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (err) {
    deviceType = "mouse";
    return false;
  }
};
isTouchDevice();

pagination.addEventListener(events[deviceType].down, (e) => {
  e.preventDefault();
  initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

  moveElem = true;
});

pagination.addEventListener(events[deviceType].move, (e) => {
  if (moveElem) {
    e.preventDefault();
    let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    // if (document.documentElement.clientWidth < 1024) {
    //   tickerItem.forEach((item) => {
    //     item.click();
    //     item.style.color = "#000";
    //   });
    // }

    pagination.style.left = pagination.offsetLeft - (initialX - newX) + "px";

    document.querySelectorAll(".ticker").forEach((item) => {
      item.classList.add("stop");
    });

    initialX = newX;
    initialY = newY;
  }
});

pagination.addEventListener(events[deviceType].up, (e) => {
  moveElem = false;
});

pagination.addEventListener("mouseleave", (e) => {
  moveElem = false;
});
pagination.addEventListener(events[deviceType].up, (e) => {
  moveElem = false;

  // if (document.documentElement.clientWidth < 1024) {
  //   tickerItem.forEach((item) => {
  //     item.style.color = "transparent";
  //   });
  // }

  document.querySelectorAll(".ticker").forEach((item) => {
    item.classList.remove("stop");
  });
});
