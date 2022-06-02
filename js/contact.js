const contactForm = document.querySelector("#contactForm");
const successContainer = document.querySelector("#successContainer");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const submitBtn = document.querySelector("#submitBtn");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 5) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
  console.log("hello");

  

}

contactForm.addEventListener("submit", validateForm);

contactForm.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();
  if(checkLength(fullName.value, 5) && validateEmail(email.value) && checkLength(subject.value, 10) && checkLength(message.value, 25)) {

    contactForm.reset();
    successContainer.innerHTML = `<p class="success">Your message has been sent. Thank you for reaching out!</p>`
    }
});

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

