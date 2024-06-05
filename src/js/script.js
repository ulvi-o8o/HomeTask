const btn = document.querySelectorAll("button");

btn.forEach((el) => {
  el.classList.add(el.textContent.toLowerCase());
  el.addEventListener("click", () => {
    el.closest(".card").children[0].children[0].children[0].classList.add(
      el.textContent.toLowerCase()
    );
  });
});
