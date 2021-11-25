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