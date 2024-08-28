var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}



function toggleContent() {
  var content = document.getElementById("history-details");
  var button = document.getElementById("see-more-btn");

  if (content.style.display === "none") {
      content.style.display = "block";
      button.innerHTML = "See Less";
  } else {
      content.style.display = "none";
      button.innerHTML = "See More";
  }
}

function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var contactMethod = document.getElementById("contact-method").value;

  // Perform custom validation for each field
  if (name === "") {
      alert("Please enter your name.");
      return;
  }

  if (email === "") {
      alert("Please enter your email.");
      return;
  }

  if (phone === "") {
      alert("Please enter your phone number.");
      return;
  }

  if (message === "") {
      alert("Please enter your message.");
      return;
  }

  if (contactMethod === "") {
      alert("Please select your preferred contact method.");
      return;
  }

  // If all fields are valid, you can proceed with form submission or further processing
  alert("Form submitted successfully!");
  document.getElementById("contactForm").reset(); // Reset the form
}
