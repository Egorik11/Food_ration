/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Components/calcRation.js":
/*!*****************************************!*\
  !*** ./src/js/Components/calcRation.js ***!
  \*****************************************/
/***/ ((module) => {

const calcRation = () => {
  const result = document.querySelector(".calculating__result span");
  let gender, height, weight, age, ration;

  const calcTotal = () => {
    if (!gender || !height || !weight || !age || !ration) {
      result.textContent = "____";
    }

    if (gender === "Женщина") {
      result.textContent = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }

    if (gender === "Мужчина") {
      result.textContent = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    }
  };

  const chooseGender = () => {
    const choose = document.querySelectorAll(".calculating__choose-item");
    choose.forEach((el) => {
      el.addEventListener("click", (e) => {
        if (el === e.target) {
          el.classList.add("item_active");
        } else {
          el.classList.remove("item_active");
        }
      });
    });
  };

  chooseGender();
  calcTotal();
};

module.exports = calcRation;

/***/ }),

/***/ "./src/js/Components/slider.js":
/*!*************************************!*\
  !*** ./src/js/Components/slider.js ***!
  \*************************************/
/***/ ((module) => {

const slider = () => {
  const slide = document.querySelectorAll(".offer__slide");
  let indexSlide = 3;

  const showCounter = () => {
    const current = document.querySelector("#current");
    const total = document.querySelector("#total");
    if (indexSlide < 10) {
      current.innerHTML = `0${indexSlide}`;
    }
    if (indexSlide >= 10) {
      current.innerHTML = `${indexSlide}`;
    }
    if (slide.length < 10) {
      total.innerHTML = `0${slide.length}`;
    }
    if (slide.length >= 10) {
      total.innerHTML = `${slide.length}`;
    }
  };

  const loadSlide = () => {
    slide.forEach((el, i) => {
      if (indexSlide === 0) {
        indexSlide = slide.length;
      }
      if (indexSlide - 1 === slide.length) {
        indexSlide = 1;
      }
      if (i === indexSlide - 1) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    });
  };

  const prevSlide = () => {
    const prev = document.querySelector(".offer__slider-prev");
    prev.addEventListener("click", () => {
      indexSlide--;
      loadSlide();
      showCounter();
    });
  };

  const nextSlide = () => {
    const next = document.querySelector(".offer__slider-next");
    next.addEventListener("click", () => {
      indexSlide++;
      loadSlide();
      showCounter();
    });
  };

  showCounter();
  nextSlide();
  prevSlide();
  loadSlide();
};

module.exports = slider;

/***/ }),

/***/ "./src/js/Components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/Components/tabs.js ***!
  \***********************************/
/***/ ((module) => {

const tabs = () => {
  const tabheader__item = document.querySelectorAll(".tabheader__item");
  const tabcontent = document.querySelectorAll(".tabcontent");

  const deleteAllContent = () => {
    tabcontent.forEach((el, i) => {
      if (i != 0) {
        el.style.display = "none";
      }
    });
  };

  const showContent = (index) => {
    tabcontent.forEach((el) => {
      el.style.display = "none";
    });
    tabcontent[index].style.display = "block";
  };

  const showActive = () => {
    tabheader__item.forEach((el, i) => {
      el.addEventListener("click", () => {
        removeClassActive();
        showContent(i);
        el.classList.add("tabheader__item_active");
      });
    });
  };

  const removeClassActive = () => {
    tabheader__item.forEach((el) => {
      el.classList.remove("tabheader__item_active");
    });
  };
  showActive();
  deleteAllContent();
};

module.exports = tabs;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
window.addEventListener("DOMContentLoaded", () => {
  const tabs = __webpack_require__(/*! ./Components/tabs */ "./src/js/Components/tabs.js");
  const slider = __webpack_require__(/*! ./Components/slider */ "./src/js/Components/slider.js");
  const calcRation = __webpack_require__(/*! ./Components/calcRation */ "./src/js/Components/calcRation.js")
  tabs();
  slider();
  calcRation();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map