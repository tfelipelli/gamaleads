function getlead() {
  var leadID = document.getElementById("form_id").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var database = firebase.database();

  if (validatelead()) // Calling validation function
  {
    storelead(leadID,name,email);
    document.getElementById("form_id").submit();
  }
}

function validatelead() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
  if (name === '' || email === '' ) {
    alert("Por favor preencha todos os campos!");
    return false;
  } else if (!(email).match(emailReg)) {
    alert("E-mail inválido!");
    return false;
  } else {
    alert("Sucesso!")
    return true;
  }
}

function storelead(userId, name, email) {

  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
  });
}
