<?php 
// session_start();
// if($_POST['Submit']) {   
// $youremail = 'sales@spizeup.in';
// $fromsubject = 'www.spizeup.in';
// $title = 'title'
// $name = $_POST['name'];
// $phone = $_POST['phone']; 
// $email = $_POST['email'];
// $message = $_POST['message']; 
// 	$to = $youremail; 
// 	$mailsubject = 'Masage recived from'.$fromsubject.' Spize.in for Quote';
// 	$body = $fromsubject.'
	
// 	The person that contacted you is  '.$name.'	
// 	 Phone Number: '.$phone.'
// 	 E-mail: '.$email.'	
// 	 Message: 
// 	 '.$message.'
	
// 	|---------END MESSAGE----------|'; 
// echo "Thank you fo your feedback. I will contact you shortly if needed.<br/>Go to <a href='index.html'>Home Page</a>"; 
// 								mail($to, $subject, $body);
		   
//  } else { 
// echo "You must write a message. </br> Please go to <a href='index.html'>Contact Page</a>"; 
// }
?>

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