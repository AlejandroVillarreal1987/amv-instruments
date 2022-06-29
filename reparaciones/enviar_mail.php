<?php
$nombre_form = $_POST['nombre'];
$email_form = $_POST['email'];
$telefono_form = $_POST['telefono'];
$mensaje_form = $_POST['mensaje'];

$cuerpo = 'Nombre: '.$nombre_form."\r\n".'Correo: '.$email_form."\r\n".'Telefono: '.$telefono_form."\r\n".'Mensaje: '.$mensaje_form;

mail('luisdelchotto@gmail.com','Consulta enviada desde amv-instrumentos',$cuerpo);

header('location: index.html');

?>