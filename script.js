const accordion = document.querySelectorAll(".accordion_btn");

function toggleAccordion() {
  accordion.forEach((item) => {
    item.addEventListener("click", () => {
      const itemImg = item.querySelector("img");
      const nextItem = item.nextElementSibling;
            accordion.forEach((otherItem) => {
              if (otherItem !== item) {
                otherItem.nextElementSibling.classList.remove("active");
                otherItem.querySelector("img").src = "./assets/images/icon-plus.svg";
              }
            });
      itemImg.classList.toggle("rotate");
      if (nextItem.classList.contains("active")) {
        itemImg.src = "./assets/images/icon-plus.svg";
      } else {
        itemImg.src = "./assets/images/icon-minus.svg";
      }
      nextItem.classList.toggle("active");
    });
  });
}

toggleAccordion();
