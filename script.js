// Define the necessaray DOM Elements
const btnEl = document.querySelector(".btn");
const shareEl = document.querySelector(".share-wrapper");

//Adding Event Listner To Button Element
btnEl.addEventListener("click", () => {
  shareEl.classList.toggle("display--none");
  btnEl.classList.toggle("btn--clicked");
});
