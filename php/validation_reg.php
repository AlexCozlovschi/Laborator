<?php
    $name = filter_input(INPUT_POST, "name");
    $surname = filter_input(INPUT_POST, "surname");
    $email = filter_input(INPUT_POST, "email");
    $password = filter_input(INPUT_POST, "password");



    if ( empty($email)){
        $email_error = "Please enter Email";
    }elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        @$email_error = "Enter correct email";
    }

    if (empty($name)){
        $name_error = "Please enter your name";
    }
    if (empty($surname)){
        $surname_error = "Please enter your surname";
    }elseif (strlen($surname) < 5){
        $surname_error = "Surname to short";
    }
    if (empty($password)){
        $password_error = "Please enter password";
    }

    if(empty($email_error) && empty($password_error)){

        $response = [
            "status" => "ok"];
        echo json_encode($response);
        }
    else{
        echo "../index.php";
        }


?>