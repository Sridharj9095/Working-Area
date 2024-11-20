function showMe() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmpassword");
  const btnName = document.getElementById("showme");

  const isPasswordType = password.type === "password";
  password.type = isPasswordType ? "text" : "password";
  confirmPassword.type = isPasswordType ? "text" : "password";
  btnName.textContent = isPasswordType ? "Hide Password" : "Show Password";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const firstname = document.getElementById("firstname");
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmpassword");

  firstname.addEventListener("keyup", () => {
    getFirstname();
  });
  email.addEventListener("keyup", () => {
    getEmail();
  });
  password.addEventListener("keyup", () => {
    getPassword();
  });
  confirmPassword.addEventListener("keyup", () => {
    getConfPass();
  });

  const namePattern = /^[A-Za-z]+$/;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  form.addEventListener("submit", (event) => {
    clearErrors();
    let isValid = true;

    // Validate firstname
    if (!firstname.value.trim()) {
      displayError(fullname, "Firstname is required.");
      applyErrorStyles(firstname);
      isValid = false;
    } else if (!namePattern.test(firstname.value.trim())) {
      displayError(fullname, "Enter a valid name.");
      applyErrorStyles(firstname);
      isValid = false;
    } else if (firstname.value.length < 4) {
      displayError(fullname, "Must be at least 4 characters.");
      applyErrorStyles(firstname);
      isValid = false;
    } else {
      removeErrorStyles(firstname);
    }

    // Validate email
    if (!email.value.trim()) {
      displayError(email, "Email is required.");
      applyErrorStyles(email);
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      displayError(email, "Enter a valid email.");
      applyErrorStyles(email);
      isValid = false;
    } else {
      removeErrorStyles(email);
    }

    // Validate password
    if (!password.value.trim()) {
      displayError(password, "Enter password.");
      applyErrorStyles(password);
      isValid = false;
    } else if (!passPattern.test(password.value)) {
      displayError(password, "Password must meet the required criteria.");
      applyErrorStyles(password);
      isValid = false;
    } else {
      removeErrorStyles(password);
    }

    // Validate confirm password
    if (!confirmPassword.value.trim()) {
      displayError(confirmPassword, "Enter confirm password.");
      applyErrorStyles(confirmPassword);
      isValid = false;
    } else if (password.value !== confirmPassword.value) {
      displayError(confirmPassword, "Passwords must match.");
      applyErrorStyles(confirmPassword);
      isValid = false;
    } else {
      removeErrorStyles(confirmPassword);
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});

// Clear existing errors for name field
function getFirstname() {
  const firstname = document.getElementById("firstname");
  const fullname = document.getElementById("fullname");
  const namePattern = /^[A-Za-z]+$/;
  const value = firstname.value.trim();
  const existingError = fullname.querySelector(".text-danger");
  if (existingError) {
    existingError.remove();
  }
  if (!value) {
    displayError(fullname, "Firstname is required.");
    applyErrorStyles(firstname);
  } else if (!namePattern.test(value)) {
    displayError(fullname, "Enter a valid name.");
    applyErrorStyles(firstname);
  } else if (value.length < 4) {
    displayError(fullname, "Must be at least 4 characters.");
    applyErrorStyles(firstname);
  } else {
    removeErrorStyles(firstname);
  }
}
// Clear existing errors for email field
function getEmail() {
  const email = document.getElementById("email");
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailError = document.querySelector("#email + .text-danger");
  if (emailError) {
    emailError.remove();
  }
  if (!email.value.trim()) {
    displayError(email, "Email is required.");
    applyErrorStyles(email);
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    displayError(email, "Enter a valid email.");
    applyErrorStyles(email);
    isValid = false;
  } else {
    removeErrorStyles(email);
  }
}
// Clear existing errors for password field
function getPassword() {
  const password = document.getElementById("password");
  const passPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const passwordError = document.querySelector("#password + .text-danger");
  if (passwordError) {
    passwordError.remove();
  }
  if (!password.value.trim()) {
    displayError(password, "Enter password.");
    applyErrorStyles(password);
    isValid = false;
  } else if (!passPattern.test(password.value)) {
    displayError(password, "Password must meet the required criteria.");
    applyErrorStyles(password);
    isValid = false;
  } else {
    removeErrorStyles(password);
  }
}

// Clear existing errors for confirm password field
function getConfPass() {
  const confirmPassword = document.getElementById("confirmpassword");
  const confirmpasswordError = document.querySelector(
    "#confirmpassword + .text-danger"
  );
  if (confirmpasswordError) {
    confirmpasswordError.remove();
  }
  if (!confirmPassword.value.trim()) {
    displayError(confirmPassword, "Enter confirm password.");
    applyErrorStyles(confirmPassword);
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    displayError(confirmPassword, "Passwords must match.");
    applyErrorStyles(confirmPassword);
    isValid = false;
  } else {
    removeErrorStyles(confirmPassword);
  }
}

function displayError(input, message) {
  const error = document.createElement("small");
  error.className = "text-danger ms-1";
  error.innerText = message;
  input.closest(".form-group").appendChild(error);
}

function clearErrors() {
  document.querySelectorAll(".text-danger").forEach((el) => el.remove());
}

function applyErrorStyles(input) {
  input.style.setProperty("outline", "0");
  input.style.setProperty("background-color", "rgb(247, 247, 247)");
  input.style.setProperty("padding", "6px 14px");
  input.classList.add(
    "border",
    "border-2",
    "border-danger",
    "w-100",
    "rounded-pill"
  );
}

function removeErrorStyles(input) {
  input.style.removeProperty("outline");
  input.style.removeProperty("background-color");
  input.style.removeProperty("padding");
  input.classList.remove("border", "border-2", "border-danger");
}
