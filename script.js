// // // var nameError = document.getElementById("name-error");
// // // var emailError = document.getElementById("email-error");
// // // var subjectError = document.getElementById("subject-error");
// // // var phoneError = document.getElementById("phone-error");
// // // var messageError = document.getElementById("message-error");
// // // var submitError = document.getElementById("button-error");

// // // function validateName() {
// // //   var name = document.getElementById("name").value;
// // //   if (name.length == 0) {
// // //     nameError.innerHTML = "Name is required!";
// // //     return false;
// // //   }
// // //   if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
// // //     nameError.innerHTML = "Invalid name!";
// // //     return false;
// // //   }
// // //   if (name.match(/\s/)) {
// // //     nameError.innerHTML =
// // //       '<div style="display: inline-block; ">' +
// // //       '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">' +
// // //       "</div>";
// // //   } else {
// // //     nameError.innerHTML = "Please enter your full name (first and last name).";
// // //   }
// // //   return true;
// // // }

// // // function validateEmail() {
// // //   var email = document.getElementById("email").value;
// // //   if (email.length == 0) {
// // //     emailError.innerHTML = "Email is required!";
// // //     return false;
// // //   }
// // //   if (!email.match(/^[\w\.-]+@[\w\.-]+\.[\w]{2,}$/)) {
// // //     emailError.innerHTML = "Invalid email";
// // //     return false;
// // //   }

// // //   emailError.innerHTML =
// // //     '<div style="display: inline-block; ">' +
// // //     '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">' +
// // //     "</div>";

// // //   return true;
// // // }

// // //   function validatePhone() {
// // //     var phone = document.getElementById("phone").value;
    
// // //     if (phone.length == 0) {
// // //       phoneError.innerHTML = "Phone No is required!";
// // //       // phoneError.classList.add("error-message");
// // //       return false;
// // //     }

// // //     if (!phone.match(/^[0-9]*$/)) {
    
// // //       phoneError.innerHTML = "Only digits please";
// // //       // phoneError.classList.add("error-message");
// // //       return false;
// // //     }

// // //     if (phone.length !== 10) {
// // //       phoneError.innerHTML = "Phone no should be 10 digits";
// // //       // phoneError.classList.add("error-message");
// // //       return false;
// // //     }

// // //     phoneError.innerHTML =
// // //       '<div class="valid-message">' +
// // //       '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">' +
// // //       "</div>";
// // //     phoneError.classList.remove("error-message");
// // //     return true;
// // //   }
// // //    function validateSubject() {
// // //      var subject = document.getElementById("subject").value;

// // //      if (subject.length === 0) {
// // //        subjectError.innerHTML = "Subject is required!";
// // //        subjectError.classList.add("error-message");
// // //        return false;
// // //      }

// // //      if (!subject.match(/^[A-Za-z\s]+$/)) {
  
// // //        subjectError.innerHTML = "Only alphabets and spaces please";
// // //        subjectError.classList.add("error-message");
// // //        return false;
// // //      }

// // //      subjectError.innerHTML = '';
// // //      subjectError.classList.remove("error-message");
// // //      return true;
// // //    }
// // //    function validateMessage() {
// // //      var message = document.getElementById("comment").value;
    
// // //      if (message.length === 0) {
// // //        messageError.innerHTML = "Message is required!";
// // //        messageError.classList.add("error-message");
// // //        return false;``
// // //      }

// // //      messageError.innerHTML =''
// // //        ;
// // //      messageError.classList.remove("error-message");
// // //      return true;
// // //    }

// // //  function validateForm() {
// // //             var nameValid = validateName();
// // //             var emailValid = validateEmail();
// // //             var subjectValid = validateSubject();
// // //             var phoneValid = validatePhone();
// // //             var messageValid = validateMessage();
// // //             var submitError = document.getElementById("button-error");
// // //             if (!nameValid || !emailValid || !subjectValid || !phoneValid || !messageValid) {
// // //                 submitError.innerHTML = "Please fill in all fields correctly.";
// // //                 return false;
// // //             }
// // //             submitError.innerHTML = "";
// // //             return true;
// // //         }
// // var nameError = document.getElementById("name-error");
// // var emailError = document.getElementById("email-error");
// // var subjectError = document.getElementById("subject-error");
// // var phoneError = document.getElementById("phone-error");
// // var messageError = document.getElementById("message-error");
// // var submitError = document.getElementById("button-error");

// // function validateName() {
// //   var name = document.getElementById("name").value;
// //   var nameValidIcon = document.getElementById("name-valid");
// //   if (name.length == 0) {
// //     nameError.innerHTML = "Name is required!";
// //     nameValidIcon.style.display = "none";
// //     return false;
// //   }
// //   if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
// //     nameError.innerHTML = "Invalid name!";
// //     nameValidIcon.style.display = "none";
// //     return false;
// //   }
// //   nameError.innerHTML = "";
// //   nameValidIcon.style.display = "block";
// //   nameValidIcon.innerHTML =
// //     '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">';
// //   return true;
// // }

// // function validateEmail() {
// //   var email = document.getElementById("email").value;
// //   var emailValidIcon = document.getElementById("email-valid");
// //   if (email.length == 0) {
// //     emailError.innerHTML = "Email is required!";
// //     emailValidIcon.style.display = "none";
// //     return false;
// //   }
// //   if (!email.match(/^[\w\.-]+@[\w\.-]+\.[\w]{2,}$/)) {
// //     emailError.innerHTML = "Invalid email";
// //     emailValidIcon.style.display = "none";
// //     return false;
// //   }
// //   emailError.innerHTML = "";
// //   emailValidIcon.style.display = "block";
// //   emailValidIcon.innerHTML =
// //     '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">';
// //   return true;
// // }

// // function validatePhone() {
// //   var phone = document.getElementById("phone").value;
// //   var phoneValidIcon = document.getElementById("phone-valid");
// //   if (phone.length == 0) {
// //     phoneError.innerHTML = "Phone No is required!";
// //     phoneValidIcon.style.display = "none";
// //     return false;
// //   }
// //   if (!phone.match(/^[0-9]*$/)) {
// //     phoneError.innerHTML = "Only digits please";
// //     phoneValidIcon.style.display = "none";
// //     return false;
// //   }
// //   if (phone.length !== 10) {
// //     phoneError.innerHTML = "Phone no should be 10 digits";
// //     phoneValidIcon.style.display = "none";
// //     return false;
// //   }
// //   phoneError.innerHTML = "";
// //   phoneValidIcon.style.display = "block";
// //   phoneValidIcon.innerHTML =
// //     '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">';
// //   return true;
// // }

// // function validateSubject() {
// //   var subject = document.getElementById("subject").value;
// //   var subjectValidIcon = document.getElementById("subject-valid");
// //   if (subject.length === 0) {
// //     subjectError.innerHTML = "Subject is required!";
// //     subjectValidIcon.style.display = "none";
// //     return false;
// //   }
// //   if (!subject.match(/^[A-Za-z\s]+$/)) {
// //     subjectError.innerHTML = "Only alphabets and spaces please";
// //     subjectValidIcon.style.display = "none";
// //     return false;
// //   }
// //   subjectError.innerHTML = "";
// //   subjectValidIcon.style.display = "block";
// //   subjectValidIcon.innerHTML =
// //     '';
// //   return true;
// // }

// // function validateMessage() {
// //   var message = document.getElementById("comment").value;
// //   var messageValidIcon = document.getElementById("message-valid");
// //   if (message.length === 0) {
// //     messageError.innerHTML = "Message is required!";
// //     messageValidIcon.style.display = "none";
// //     return false;
// //   }
// //   messageError.innerHTML = "";
// //   messageValidIcon.style.display = "block";
// //   messageValidIcon.innerHTML =
// //     '';
// //   return true;
// // }

// // function validateForm() {
// //   var nameValid = validateName();
// //   var emailValid = validateEmail();
// //   var subjectValid = validateSubject();
// //   var phoneValid = validatePhone();
// //   var messageValid = validateMessage();
// //   if (
// //     !nameValid ||
// //     !emailValid ||
// //     !subjectValid ||
// //     !phoneValid ||
// //     !messageValid
// //   ) {
// //     submitError.innerHTML = "Please fill in all fields correctly.";
// //     return false;
// //   }
// //   submitError.innerHTML = "";
// //   return true;
// // }

// // document
// //   .getElementById("submit-button-div")
// //   .addEventListener("click", function () {
// //     document.querySelector("#submit-form input[type='submit']").click();
// //   });
// var nameError = document.getElementById("name-error");
// var emailError = document.getElementById("email-error");
// var subjectError = document.getElementById("subject-error");
// var phoneError = document.getElementById("phone-error");
// var messageError = document.getElementById("message-error");
// var submitError = document.getElementById("button-error");

// function validateName() {
//   var name = document.getElementById("name").value;
//   var nameValidIcon = document.getElementById("name-valid");
//   if (name.length == 0) {
//     nameError.innerHTML = "Name is required!";
//     nameValidIcon.style.display = "none";
//     return false;
//   }
//   if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
//     nameError.innerHTML = "Invalid name!";
//     nameValidIcon.style.display = "none";
//     return false;
//   }
//   nameError.innerHTML = "";
//   nameValidIcon.style.display = "block";
//   nameValidIcon.innerHTML =
//     '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">';
//   return true;
// }

// function validateEmail() {
//   var email = document.getElementById("email").value;
//   var emailValidIcon = document.getElementById("email-valid");
//   if (email.length == 0) {
//     emailError.innerHTML = "Email is required!";
//     emailValidIcon.style.display = "none";
//     return false;
//   }
//   if (!email.match(/^[\w\.-]+@[\w\.-]+\.[\w]{2,}$/)) {
//     emailError.innerHTML = "Invalid email";
//     emailValidIcon.style.display = "none";
//     return false;
//   }
//   emailError.innerHTML = "";
//   emailValidIcon.style.display = "block";
//   emailValidIcon.innerHTML =
//     '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">';
//   return true;
// }

// function validatePhone() {
//   var phone = document.getElementById("phone").value;
//   var phoneValidIcon = document.getElementById("phone-valid");
//   if (phone.length == 0) {
//     phoneError.innerHTML = "Phone No is required!";
//     phoneValidIcon.style.display = "none";
//     return false;
//   }
//   if (!phone.match(/^[0-9]*$/)) {
//     phoneError.innerHTML = "Only digits please";
//     phoneValidIcon.style.display = "none";
//     return false;
//   }
//   if (phone.length !== 10) {
//     phoneError.innerHTML = "Phone no should be 10 digits";
//     phoneValidIcon.style.display = "none";
//     return false;
//   }
//   phoneError.innerHTML = "";
//   phoneValidIcon.style.display = "block";
//   phoneValidIcon.innerHTML =
//     '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">';
//   return true;
// }

// function validateSubject() {
//   var subject = document.getElementById("subject").value;
//   var subjectValidIcon = document.getElementById("subject-valid");
//   if (subject.length === 0) {
//     subjectError.innerHTML = "Subject is required!";
//     subjectValidIcon.style.display = "none";
//     return false;
//   }
//   if (!subject.match(/^[A-Za-z\s]+$/)) {
//     subjectError.innerHTML = "Only alphabets and spaces please";
//     subjectValidIcon.style.display = "none";
//     return false;
//   }
//   subjectError.innerHTML = "";
//   subjectValidIcon.style.display = "block";
//   subjectValidIcon.innerHTML = "";
//   return true;
// }

// function validateMessage() {
//   var message = document.getElementById("comment").value;
//   var messageValidIcon = document.getElementById("message-valid");
//   if (message.length === 0) {
//     messageError.innerHTML = "Message is required!";
//     messageValidIcon.style.display = "none";
//     return false;
//   }
//   messageError.innerHTML = "";
//   messageValidIcon.style.display = "block";
//   messageValidIcon.innerHTML = "";
//   return true;
// }

// function validateForm() {
//   var nameValid = validateName();
//   var emailValid = validateEmail();
//   var subjectValid = validateSubject();
//   var phoneValid = validatePhone();
//   var messageValid = validateMessage();
//   if (
//     !nameValid ||
//     !emailValid ||
//     !subjectValid ||
//     !phoneValid ||
//     !messageValid
//   ) {
//     submitError.innerHTML = "Please fill in all fields correctly.";
//     return false;
//   }
//   submitError.innerHTML = "";
//   return true;
// }

// document
//   .getElementById("submit-button-div")
//   .addEventListener("click", function () {
//     document.querySelector("#submit-form button[type='submit']").click();
//   });
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subjectError = document.getElementById("subject-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("button-error");

function validateName() {
  var name = document.getElementById("name").value;
  var nameValidIcon = document.getElementById("name-valid");
  if (name.length == 0) {
    nameError.innerHTML = "Name is required!";
    nameValidIcon.style.display = "none";
    return false;
  }
  if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)) {
    nameError.innerHTML = "Invalid name!";
    nameValidIcon.style.display = "none";
    return false;
  }
  nameError.innerHTML = "";
  nameValidIcon.style.display = "block";
  nameValidIcon.innerHTML =
    '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">';
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailValidIcon = document.getElementById("email-valid");
  if (email.length == 0) {
    emailError.innerHTML = "Email is required!";
    emailValidIcon.style.display = "none";
    return false;
  }
  if (!email.match(/^[\w\.-]+@[\w\.-]+\.[\w]{2,}$/)) {
    emailError.innerHTML = "Invalid email";
    emailValidIcon.style.display = "none";
    return false;
  }
  emailError.innerHTML = "";
  emailValidIcon.style.display = "block";
  emailValidIcon.innerHTML =
    '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">';
  return true;
}

function validatePhone() {
  var phone = document.getElementById("phone").value;
  var phoneValidIcon = document.getElementById("phone-valid");
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone No is required!";
    phoneValidIcon.style.display = "none";
    return false;
  }
  if (!phone.match(/^[0-9]*$/)) {
    phoneError.innerHTML = "Only digits please";
    phoneValidIcon.style.display = "none";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    phoneValidIcon.style.display = "none";
    return false;
  }
  phoneError.innerHTML = "";
  phoneValidIcon.style.display = "block";
  phoneValidIcon.innerHTML =
    '<img src="assets/images/Green-check.svg" alt="Valid" style="width: 20px; height: 20px;">';
  return true;
}

function validateSubject() {
  var subject = document.getElementById("subject").value;
  var subjectValidIcon = document.getElementById("subject-valid");
  if (subject.length === 0) {
    subjectError.innerHTML = "Subject is required!";
    subjectValidIcon.style.display = "none";
    return false;
  }
  if (!subject.match(/^[A-Za-z\s]+$/)) {
    subjectError.innerHTML = "Only alphabets and spaces please";
    subjectValidIcon.style.display = "none";
    return false;
  }
  subjectError.innerHTML = "";
  subjectValidIcon.style.display = "block";
  subjectValidIcon.innerHTML = "";
  return true;
}

function validateMessage() {
  var message = document.getElementById("Message").value;
  var messageValidIcon = document.getElementById("message-valid");
  if (message.length === 0) {
    messageError.innerHTML = "Message is required!";
    messageValidIcon.style.display = "none";
    return false;
  }
  messageError.innerHTML = "";
  // messageValidIcon.style.display = "block";
  // messageValidIcon.innerHTML = "";
  return true;
}

function validateForm() {
  var nameValid = validateName();
  var emailValid = validateEmail();
  var subjectValid = validateSubject();
  var phoneValid = validatePhone();
  var messageValid = validateMessage();
  if (
    !nameValid ||
    !emailValid ||
    !subjectValid ||
    !phoneValid ||
    !messageValid
  ) {
    submitError.innerHTML = "Please fill in all fields correctly.";
    return false;
  }
  submitError.innerHTML = "";
  return true;
}

document
  .getElementById("submit-button-div")
  .addEventListener("click", function () {
    document.querySelector("#submit-form button[type='submit']").click();
  });
