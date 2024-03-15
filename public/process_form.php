<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $contactFName = $_POST["contactFName"];
  $contactEmail = $_POST["contactEmail"];
  $subject = $_POST["subject"];
  $contactMessage = $_POST["contactMessage"];

  // Process the form data as needed (e.g., send email, save to database, etc.)

  // Redirect or display a thank you message
  header("Location: thank_you_page.html");
  exit();
}
?>
