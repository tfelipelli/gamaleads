function getIp(callback) {
  function response(s) {
    callback(window.userip);

    s.onload = s.onerror = null;
    document.body.removeChild(s);
  }

  function trigger() {
    window.userip = false;

    var s = document.createElement("script");
    s.async = true;
    s.onload = function() {
      response(s);
    };
    s.onerror = function() {
      response(s);
    };

    s.src = "https://l2.io/ip.js?var=userip";
    document.body.appendChild(s);
  }

  if (/^(interactive|complete)$/i.test(document.readyState)) {
    trigger();
  } else {
    document.addEventListener("DOMContentLoaded", trigger);
  }
}


var config = {
  apiKey: "AIzaSyDP637DPuIeUoGHXtNdZsl5cnEf7IzWaS0",
  authDomain: "gamaleads-899c1.firebaseapp.com",
  databaseURL: "https://gamaleads-899c1.firebaseio.com",
  projectId: "gamaleads-899c1",
  storageBucket: "gamaleads-899c1.appspot.com",
  messagingSenderId: "456553398482"
};

firebase.initializeApp(config);

getIp(function(ip) {
  var userip = ip;

// Reference to your entire Firebase database
var dbase = firebase.database().ref();

  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');

    var currentdate = new Date();
    var datetime = currentdate.getFullYear() + "-"
                    + (currentdate.getMonth()+1)  + "-"
                    + currentdate.getDate() + " "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds();

    // Save message
    saveContact(email, name, userip, datetime);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
  }

  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveContact(email, name, userip, datetime){
    var newlead = dbase.push();
    newlead.set({
      email:email,
      name: name,
      ip: userip,
      tipo: "B2C",
      data_hora: datetime
    });
  }

});
