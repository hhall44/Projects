<?php

// 1. Connect to Local MySQL Server (Using XAMPP or MAMPP)
    $db_server = "localhost";
    $db_username = "root";
    $db_password = "root";
    $db_name = "my_calendar";
    # Create connection
    $conn = new mysqli($db_server, $db_username, $db_password, $db_name);
?>