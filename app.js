// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const mainElt = document.querySelector("main");
const modalOpenBtn = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const modalCloseBtn = document.querySelector(".close-btn");
const modalContainer = document.querySelector(".modal-container");

document.onkeydown = (e) => {
  if (e.key == "Escape") {
    if (overlay.classList.contains("open-modal")) {
      overlay.classList.remove("open-modal");
    }
  }
};

window.onclick = (e) => {
  console.log("hello3");
  if (overlay.classList.contains("open-modal")) {
    if (e.button == 0 && !modalContainer.contains(e.target))
      overlay.classList.remove("open-modal");
  }
  if (modalOpenBtn.contains(e.target)) {
    overlay.classList.add("open-modal");
  }
  if (modalCloseBtn.contains(e.target)) {
    overlay.classList.remove("open-modal");
  }
};
