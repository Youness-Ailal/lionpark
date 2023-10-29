const sendYourPhoto = document.querySelector(".week__button");
const goBack = document.querySelector(".week__form--bottom-back");
const submitPage = document.querySelector(".week__submit");
const photoPage = document.querySelector(".week__content");
const weekForm = document.querySelector(".week__form");
const weekMessage = document.querySelector(".week__done");
const messageBack = document.querySelector(".message-back");
const fileText = document.querySelector(".week__file--text");
const fileInput = document.querySelector("#week__file");

const showSubmitPage = function () {
  photoPage.style.transform = "translateX(-100%)";
  submitPage.style.transform = "translateX(-100%)";
};
const hideSubmitPage = function () {
  photoPage.style.transform = "translateX(0)";
  submitPage.style.transform = "translateX(0)";
};
const showMessage = function () {
  weekMessage.classList.remove("hidden-week");
};
const hideMessage = function () {
  weekMessage.classList.add("hidden-week");
};
const changeFileName = function () {
  fileInput.addEventListener("change", e => {
    const file = e.target.files[0];
    const fileName = file.name;
    const first8 = fileName.substring(0, 10);
    const last5 = fileName.slice(-5);
    const shortened = `${first8}...${last5}`;
    fileText.textContent = shortened;
  });
};
const resetFileName = function () {
  fileText.textContent = "Click or Drag an image";
};
changeFileName();
sendYourPhoto.addEventListener("click", () => {
  showSubmitPage();
});
goBack.addEventListener("click", () => {
  hideSubmitPage();
});
messageBack.addEventListener("click", () => {
  hideSubmitPage();
  hideMessage();
});
weekForm.addEventListener("submit", e => {
  resetFileName();
  weekForm.reset();
  e.preventDefault();
  showMessage();

  setTimeout(() => {
    hideSubmitPage();
  }, 1000);
  setTimeout(() => {
    hideMessage();
  }, 5000);
});
