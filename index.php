```php
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

        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";

        if (mail($to, $subject, $body, $headers)) {

            echo "Message sent successfully!";

        } else {

            echo "Failed to send message.";

        }
    }
}
?>
```
