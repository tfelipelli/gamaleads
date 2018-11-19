// Initialize Firebase
var config = {
  apiKey: "AIzaSyDP637DPuIeUoGHXtNdZsl5cnEf7IzWaS0",
  authDomain: "gamaleads-899c1.firebaseapp.com",
  databaseURL: "https://gamaleads-899c1.firebaseio.com",
  projectId: "gamaleads-899c1",
  storageBucket: "gamaleads-899c1.appspot.com",
  messagingSenderId: "456553398482"
};
firebase.initializeApp(config);

  var dbase = firebase.database().ref();

  // Listen for form submit
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  // Submit form
  function submitForm(e) {
    e.preventDefault();

    new Date($.now());
    var dt = new Date();
    var mes = dt.getMonth() + 1;
    var time =
      dt.getFullYear() +
      "-" +
      mes +
      "-" +
      dt.getDate() +
      " " +
      dt.getHours() +
      ":" +
      dt.getMinutes() +
      ":" +
      dt.getSeconds();

    // Get values
    var name = getInputVal("name");
    var email = getInputVal("email");

    // Save message
    saveContact(email, name, time);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear form
    document.getElementById("contactForm").reset();
  }

  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveContact(email, name, time) {
    var newContact = dbase.push();
    newContact.set({
      email: email,
      name: name,
      time: time
    });
  }
