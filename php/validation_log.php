<?php
$email_l = filter_input(INPUT_POST, "log_email");
$password_l = filter_input(INPUT_POST, "log_pas");



if ( empty($email_l)){
    $email_error_l= "Please enter Email";
}elseif (!filter_var($email_l, FILTER_VALIDATE_EMAIL)){
    @$email_error_l = "Enter correct email";
}

if (empty($password_l)){
    $password_error_l = "Please enter password";
}

if(empty($email_error_l) && empty($password_error_l)){


    include("../html/succes_reg.html");
}
else{
    include ("../index.php");
}


?>