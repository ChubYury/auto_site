<?php
  $role = $_POST['role']
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $mess = $_POST['mess'];
  
  $to = "testison777@gmail.com";
  $date = date ("d.m.y");
  $time = date ("h:i");
  $from = $email;
  $subject = "Заявка с сайта";

  $mess = "
    Имя: $name /n
    Телефон: $phone /n
    Роль: $role
    Текст: $mess";
    mail($to, $subject, $msg, "from: $from");
    