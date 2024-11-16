function showMe() {
  const passWord = document.getElementById("password");
  const confirmPassWord = document.getElementById("confirmpassword");
  const btnName = document.getElementById("showme");
  if (passWord.type === "password" && confirmPassWord.type === "password") {
    passWord.type = "text";
    confirmPassWord.type = "text";
    btnName.textContent = "Hide Password";
  } else {
    passWord.type = "password";
    confirmPassWord.type = "password";
    btnName.textContent = "Show Password";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const firstname = document.getElementById("firstname");
  const password = document.getElementById("password");
  const confirmPassWord = document.getElementById("confirmpassword");
  const email = document.getElementById("email");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  form.addEventListener("submit", (event) => {
    clearErrors();
    let isValid = true;
    if (email) {
      let checkIsValidEmail = emailPattern.test(email.value);
      console.log("checkIsValidEmail", checkIsValidEmail);
      if (email.value.trim() === "") {
        displayError(email, "Email is required.");
        email.style.setProperty("outline", "0");
        email.style.setProperty("background-color", "rgb(247, 247, 247)");
        email.style.setProperty("padding", "6px 14px");
        email.classList.add(
          "border",
          "border-2",
          "border-danger",
          "w-100",
          "rounded-pill"
        );
        isValid = false;
      } else if (!checkIsValidEmail) {
        displayError(email, "Enter a valid email.");
        email.style.setProperty("outline", "0");
        email.style.setProperty("background-color", "rgb(247, 247, 247)");
        email.style.setProperty("padding", "6px 14px");
        email.classList.add(
          "border",
          "border-2",
          "border-danger",
          "w-100",
          "rounded-pill"
        );
        isValid = false;
      } else {
        email.style.removeProperty("outline");
        email.style.removeProperty("background-color");
        email.style.removeProperty("padding");
        email.classList.remove("border", "border-2", "border-danger");
      }
    }
    if (firstname.value.trim() === "") {
      displayError(firstname, "Firstname is required.");
      firstname.style.setProperty("outline", "0");
      firstname.style.setProperty("background-color", "rgb(247, 247, 247)");
      firstname.style.setProperty("padding", "6px 14px");
      firstname.classList.add(
        "border",
        "border-2",
        "border-danger",
        "w-100",
        "rounded-pill"
      );
      isValid = false;
    } else {
      firstname.style.removeProperty("outline");
      firstname.style.removeProperty("background-color");
      firstname.style.removeProperty("padding");
      firstname.classList.remove("border", "border-2", "border-danger");
    }
    if (password.value.trim() === "") {
      displayError(password, "Enter password.");
      password.style.setProperty("outline", "0");
      password.style.setProperty("background-color", "rgb(247, 247, 247)");
      password.style.setProperty("padding", "6px 14px");
      password.classList.add(
        "border",
        "border-2",
        "border-danger",
        "w-100",
        "rounded-pill"
      );
      isValid = false;
    } else {
      password.style.removeProperty("outline");
      password.style.removeProperty("background-color");
      password.style.removeProperty("padding");
      password.classList.remove("border", "border-2", "border-danger");
    }
    if (confirmPassWord.value.trim() === "") {
      displayError(confirmPassWord, "Enter confirm password.");
      confirmPassWord.style.setProperty("outline", "0");
      confirmPassWord.style.setProperty(
        "background-color",
        "rgb(247, 247, 247)"
      );
      confirmPassWord.style.setProperty("padding", "6px 14px");
      confirmPassWord.classList.add(
        "border",
        "border-2",
        "border-danger",
        "w-100",
        "rounded-pill"
      );
      isValid = false;
    } else {
      confirmPassWord.style.removeProperty("outline");
      confirmPassWord.style.removeProperty("background-color");
      confirmPassWord.style.removeProperty("padding");
      confirmPassWord.classList.remove("border", "border-2", "border-danger");
    }
    if (
      password.value !== confirmPassWord.value &&
      confirmPassWord.value.trim() !== ""
    ) {
      displayError(confirmPassWord, "Confirm password must match.");
      confirmPassWord.style.setProperty("outline", "0");
      confirmPassWord.style.setProperty(
        "background-color",
        "rgb(247, 247, 247)"
      );
      confirmPassWord.style.setProperty("padding", "6px 14px");
      confirmPassWord.classList.add(
        "border",
        "border-2",
        "border-danger",
        "w-100",
        "rounded-pill"
      );
      isValid = false;
    }
    if (!isValid) {
      event.preventDefault();
    }
  });
});

function displayError(input, message) {
  const error = document.createElement("small");
  error.className = "text-danger ms-1";
  error.innerText = message;
  input.closest(".form-group").appendChild(error);
}

function clearErrors() {
  document.querySelectorAll(".text-danger").forEach((el) => el.remove());
}
