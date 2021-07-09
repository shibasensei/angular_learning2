<?php

// $_POST = json_decode(file_get_contents('php://input'),true);


if(isset($_POST) && !empty($_POST)){
    $email = $_POST('email');
    $password = $_POST('password');
    log("email = ",$email);
    if($email == 'admin' && $password =='admin'){
        echo '{"success":true,"secret":"some secret"}';
      
    } else {
        echo
        '{
            "success":false,
            "message":"Invalid cred"
        }';
        
    }
}else {
    echo
    '{
        "success":false,
        "message":"only post please"
    }';
    
}
?>