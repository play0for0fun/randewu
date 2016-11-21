<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$subject = 'Заявка з сайту';	

//$headers= "From: noreply <noreply@noreply.ru>\r\n";
//$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$to = "pavlo.randevu@gmail.com";

$message = "Имя: $name\n";
$message .= "Email: $email\n";
$message .= "Телефон: $phone\n";

mail ($to,$subject,$message,$headers);
?>