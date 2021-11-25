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