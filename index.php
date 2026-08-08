<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($email) || empty($message)) {

        echo "Please fill in all fields.";

    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        echo "Invalid email.";

    } else {

        $name = htmlspecialchars($name);
        $email = htmlspecialchars($email);
        $message = htmlspecialchars($message);

        $to = "codingjournet08@gmail.com";
        $subject = "New Portfolio Message";

        $body = "
Name: $name
Email: $email

Message:
$message
";

        echo "POST RECEIVED";
        echo "<br>Name: " . $name;
        echo "<br>Email: " . $email;
        echo "<br>Message: " . $message;

        echo "<hr>";
        echo "TO: " . $to;
        echo "<br>SUBJECT: " . $subject;
        echo "<br>BODY:";
        echo nl2br($body);
    }
}
?>