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