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
var myFirebase = firebase.database().ref();

var leads = myFirebase.child("leads");

leads.push({
    "email": "tfelipelli@gmail.com",
    "nome": "thais felipelli",
    "ip": "192.168.15.13"
    "tipo": "B2C"
    "data_hora": "2018-10-02 18:24:14"
});
