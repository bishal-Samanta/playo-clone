<?php 
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$message = $_POST["message"];

$email_form = "abhijeetdharme2015@gmail.com";

$email_subject = "New form";

$email_body = "User name : $name.\n".
                     "User email : $email.\n".
                     "User message : $message\n";
  $to = "abhijeetdharme2015@gmail.com";

$headers = "from : $email_from \r\n";

$headers = "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");

                     ?>