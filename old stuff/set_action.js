function getlead() {
  var userId = document.getElementById("form_id").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var database = firebase.database();

  if (validatelead()) // Calling validation function
  {
    if (storelead())
    {
      document.getElementById("form_id").action = "success.php";
      document.getElementById("form_id").submit();
    }
    else {
      alert("Dados não armazenados!")
    }
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
    return true;
  }
}

function storelead() {
  var userId = document.getElementById("form_id").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var database = firebase.database();

  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
  });
  return true;
}
