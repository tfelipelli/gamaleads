var config = {
  apiKey: "AIzaSyDP637DPuIeUoGHXtNdZsl5cnEf7IzWaS0",
  authDomain: "gamaleads-899c1.firebaseapp.com",
  databaseURL: "https://gamaleads-899c1.firebaseio.com",
  projectId: "gamaleads-899c1",
  storageBucket: "gamaleads-899c1.appspot.com",
  messagingSenderId: "456553398482"
};

firebase.initializeApp(config);
// Reference to your entire Firebase database
var dbase = firebase.database().ref();

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>

$(getIP() {
 $.getJSON("https://api.ipify.org?format=jsonp&callback=?",getIP(json) {
   return(json.ip); } ); });

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var ip = getIP();
  var time = moment().format("YYYY-MM-DD hh:mm:ss");

  // Save message
  saveContact(name, email, ip, time);

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
function saveContact(name, email, ip, time){
  var newlead = dbase.push();
  newlead.set({
    name: name,
    email:email,
    ip: ip,
    tipo: "B2C",
    data_hora: time
  });
}
