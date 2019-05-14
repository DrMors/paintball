<meta charset="utf-8">
<?php
$Paintball = "Paintball";
error_reporting(E_ERROR);   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['first_name'])) {
    $first_name            = $_POST['first_name'];
    if ($first_name == '') {
        unset($first_name);
    }
}
if (isset($_POST['last_name'])) {
    $last_name        = $_POST['last_name'];
    if ($last_name == '') {
        unset($last_name);
    }
}
if (isset($_POST['tel'])) {
    $tel            = $_POST['tel'];
    if ($tel == '') {
        unset($tel);
    }
}
if (isset($_POST['players_number'])) {
    $players_number            = $_POST['players_number'];
    if ($players_number == '') {
        unset($players_number);
    }
}
if (isset($_POST['data'])) {
    $data            = $_POST['data'];
    if ($data == '') {
        unset($data);
    }
}
if (isset($_POST['time_play'])) {
    $time_play            = $_POST['time_play'];
    if ($time_play == '') {
        unset($time_play);
    }
}
if (isset($_POST['kind_of_game'])) {
    $kind_of_game            = $_POST['kind_of_game'];
    if ($kind_of_game == '') {
        unset($kind_of_game);
    }
}
if (isset($_POST['sab'])) {
    $sab            = $_POST['sab'];
    if ($sab == '') {
        unset($sab);
    }
}
//стирание треугольных скобок из полей формы
if (isset($first_name)) {
    $first_name = stripslashes($first_name);
    $first_name = htmlspecialchars($first_name);
}
if (isset($last_name)) {
    $last_name = stripslashes($last_name);
    $last_name = htmlspecialchars($last_name);
}
if (isset($tel)) {
    $tel = stripslashes($tel);
    $tel = htmlspecialchars($tel);
}
if (isset($players_number)) {
    $players_number = stripslashes($players_number);
    $players_number = htmlspecialchars($players_number);
}
if (isset($data)) {
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
}
if (isset($time_play)) {
    $time_play = stripslashes($time_play);
    $time_play = htmlspecialchars($time_play);
}
if (isset($kind_of_game)) {
    $kind_of_game = stripslashes($kind_of_game);
    $kind_of_game = htmlspecialchars($kind_of_game);
}
// адрес почты куда придет письмо
$address = " хрен знает @gmail.com";
// текст письма  
$note_tel = "Тема : $Paintball \r\n Имя : $first_name \r\n Фамилия : $last_name \r\n Телефон : $tel \r\n Количество игроков : $players_number \r\n Дата бронирования : $data \r\n Время игры : $time_play \r\n Вид игры : $kind_of_game";

if (isset($first_name)  &&  isset($sab)) {
    mail($address, $Paintball, $note_tel, "Content-type:tel/plain; windows-1251");
    // сообщение после отправки формы
    echo "<p style='color:#009900;'>Уважаемый(ая) <b>$first_name</b><b>$last_name</b>  Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят по вашему номеру телефона<b> $tel</b>.</p>";
}

?>