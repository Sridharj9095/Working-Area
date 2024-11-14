function showMe() {
  var typeConv = document.getElementById("password");
  var btnName = document.getElementById("showme");
  if (typeConv.type === "password") {
    typeConv.type = "text";
    btnName.textContent = "Hide Password";
  } else {
    typeConv.type = "password";
    btnName.textContent = "Show Password";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  form.addEventListener("submit", (event) => {
    clearErrors();
    let isValid = true;
    if (username.value.trim() === "") {
      displayError(username, "Username is required.");
      username.style = "outline:0";
      username.className = "border border-danger w-100 rounded py-1 px-2";
      isValid = false;
    }
    if (password.value.trim() === "") {
      displayError(password, "Password is required.");
      password.style = "outline:0";
      password.className = "border border-danger w-100 rounded py-1 px-2";
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
