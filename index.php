2<?php
header('Access-Control-Allow-Origin: *');

$layer1 = isset($_POST["layer1"]) ? $_POST["layer1"] : false;
echo $layer1."<br/>";
$layer2 = isset($_POST["layer2"]) ? $_POST["layer2"] : false;
echo $layer2."<br/>";
$layer3 = isset($_POST["layer3"]) ? $_POST["layer3"] : false;
echo $layer3."<br/>";
$layer4 = isset($_POST["layer4"]) ? $_POST["layer4"] : false;
echo $layer4."<br/>";
$layer5 = isset($_POST["layer5"]) ? $_POST["layer5"] : false;
echo $layer5."<br/>";
$layer6 = isset($_POST["layer6"]) ? $_POST["layer6"] : false;
echo $layer6."<br/>";

$topping = isset($_POST["topping"]) ? $_POST["topping"] : false;
echo $topping."<br/>";

$size = isset($_POST["size"]) ? $_POST["size"] : false;
echo $size."<br/>";

$name = isset($_POST["firstName"]) ? $_POST["firstName"] : false;
echo "<h1>".$name."</h1><br/>";
$surname = isset($_POST["lastName"]) ? $_POST["lastName"] : false;
echo $surname."<br/>";
$email = isset($_POST["email"]) ? $_POST["email"] : false;
echo $email."<br/>";
$phone = isset($_POST["phone"]) ? $_POST["phone"] : false;
echo $phone."<br/>";
$address = isset($_POST["address"]) ? $_POST["address"] : false;
echo $address."<br/>";
$city = isset($_POST["city"]) ? $_POST["city"] : false;
echo $city."<br/>";
$zipCode = isset($_POST["zipCode"]) ? $_POST["zipCode"] : false;
echo $zipCode."<br/>";
$message = isset($_POST["message"]) ? $_POST["message"] : false;
echo $message."<br/>";

$shippingSelf = isset($_POST["shippingSelf"]) ? $_POST["shippingSelf"] : false;
echo $shippingSelf."<br/>";
$shippingPlease = isset($_POST["shippingPlease"]) ? $_POST["shippingPlease"] : false;
echo $shippingPlease."<br/>";

$to      = 'marta.kosiorowska@gmail.com';
$subject = 'the subject';

$message = "<html> <body> <h1>Order</h1> <br> 1:".$layer1. "\r\n" .
          "<br> 2:".$layer2."<br> 3:".$layer3."<br> 4:".$layer4. "\r\n" .
          "<br> 5:".$layer5."<br> 6:".$layer6."<br> name: ".$name. "\r\n" .
          "<br> surname: ".$surname.",<br> size: ".$size. "\r\n" .
          "<br> email:".$email."<br> phone:".$phone. "\r\n" .
          "<br> address".$address.$city. "\r\n" .
          "<br> zip code:".$zipCode."<br> address:".$message. "\r\n" .
          "<br> self:".$shippingSelf."<br> shipping:".$shippingPlease."</body> </html>";
// $message =  $layer1.",<br> size: ".$size."\r\n" .", name: ".$name.", surname: ".$surname.$email.$phone.$address.$city.$zipCode.$message.$shippingSelf.$shippingPlease;
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion() .  "\r\n" .
    "MIME-Version: 1.0\r\n" .
    "Content-Type: text/html; charset=UTF-8\r\n";

mail($to, $subject, $message, $headers);
?>
