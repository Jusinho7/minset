<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $receve = "lucasjusinho@gmail.com"; 

    $email_subject = "Un nouveau message  : $subject";

    $email_body = "Tu as reçu un nouveau message depuis ton site de pizzeria \n\n".
                  "Nom : $name\n".
                  "Email : $email\n".
                  "Sujet : $subject\n".
                  "Message :\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($receve, $email_subject, $email_body, $headers)) {
        echo "<script>alert('Merci $name ! Ton message a été envoyé avec succès');</script>";
    } else {
        echo "<script>alert('Erreur, ton message n’a pas pu être envoyé.');</script>";
    }
}
?>
