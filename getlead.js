function myfunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (validation()) // Calling validation function
  {
    document.getElementById("form_id").action = "getlead.php";
    document.getElementById("form_id").submit();
  }
}

function validation() {
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
