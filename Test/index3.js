const buttonElement = document.querySelector(".js-button");

buttonElement.addEventListener("click", () => {
  if (buttonElement.innerHTML === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
  } else {
    buttonElement.innerHTML = "Subscribe";
  }
});
