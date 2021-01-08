<?php

$email = $_POST['email'];
$subject = $_POST['title'];


$formcontent=" From: $email requested for Newsletter";
$recipient = "sales@spizeup.in";

$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
// echo "thankyou.html";
header('Location: thankyou-subs.html');
exit();
?>