<?php
$email=$_REQUEST['email'];
$password=$_REQUEST['password'];

if(isset($_POST['submit-btn']))
{
    $host="localhost";
    $user="root";
    $password="";
    $db="medicomm";

$conn=mysqli_connect($host,$user,$password,$db);

$insert= "insert into loginform values('$email','$password')";

mysqli_query($conn,$insert);

if($conn){
    echo("<h1 style='color:green;'> your registration is done!</h1>");
}
else{
    echo("<h1 style='color:red;'> your registration is failed!</h1>");
}    
    
}




?>