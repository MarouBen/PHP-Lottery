<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Handle form submission
        $selectedNumbers = $_POST["selectedNumbers"];
        // Do something with selectedNumbers
        echo "Selected numbers: " . implode(", ", $selectedNumbers);
    }
?>