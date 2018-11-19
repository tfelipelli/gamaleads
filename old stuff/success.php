<?php
  // Fetching Values from URL
  $name=$_POST['name'];
  $email=$_POST['email'];
?>

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="css/style.css"/>
  </head>
  <body>
    <div class="container">
      <div class="main">
        <h3>Dados Armazenados</h3>
        <form>
          <label>Nome: </label><label><?php echo $name; ?></label>
          <label>E-mail: </label><label><?php echo $email; ?></label>
          <a href="set_action.html" class="back">Back</a>
        </form>
      </div>
    </div>
  </body>
</html>
