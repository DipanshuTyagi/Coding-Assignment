const form = document.getElementById("surveyForm");
const popup = document.getElementById("popup");

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
console.log(closePopupBtn);

submitBtn.addEventListener("click", () => {
  if (form.checkValidity()) {
    const formData = new FormData(form);

    document.getElementById("popFirstName").textContent =
      formData.get("firstName");
    document.getElementById("popLastName").textContent =
      formData.get("lastName");
    document.getElementById("popDOB").textContent = formData.get("dob");
    document.getElementById("popCountry").textContent = formData.get("country");
    document.getElementById("popGender").textContent = Array.from(
      formData.getAll("gender")
    ).join(", ");
    document.getElementById("popProfession").textContent =
      formData.get("profession");
    document.getElementById("popEmail").textContent = formData.get("email");
    document.getElementById("popMobile").textContent = formData.get("mobile");

    popup.style.display = "block";
  } else {
    displayValidationMessages();
  }
});

resetBtn.addEventListener("click", () => {
  form.reset();
  clearValidationMessages();
});

closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
  form.reset();
});

function displayValidationMessages() {
  const inputs = form.querySelectorAll("input, select");
  inputs.forEach((input) => {
    const validationMessage = input.validationMessage;
    const validationMessageElement = document.getElementById(
      input.id + "ValidationMessage"
    );
    if (validationMessageElement) {
      validationMessageElement.textContent = validationMessage;
    }
  });
}

function clearValidationMessages() {
  const validationMessageElements = form.querySelectorAll(
    ".validation-message"
  );
  validationMessageElements.forEach((element) => {
    element.textContent = "";
  });
}

form.addEventListener("input", clearValidationMessages);
