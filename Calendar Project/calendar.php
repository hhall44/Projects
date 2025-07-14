<?php

// we have to include the connection.php file to connect to the database
include "connection.php";
if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
ini_set('display_errors', 1);
error_reporting(E_ALL);

$successMsg = '';
$errorMsg = '';
$eventsFromDB = []; //initialize a new array to store the fetched events

# handle add appointment 
if ($_SERVER["REQUEST_METHOD"] === "POST" && ($_POST['action'] ?? '') === "add") {


    $event = trim($_POST["event_name"] ?? '');
    $poc = trim($_POST['point_of_contact'] ?? '');
    $start = $_POST['start_date'] ?? '';
    $end = $_POST['end_date'] ?? '';
    $startTime = $_POST['start_time'] ?? '';
    $endTime = $_POST['end_time'] ?? '';

    if ($event && $poc && $start && $end) {
        $stmt = $conn->prepare(
            "INSERT INTO events (event_name, point_of_contact, start_date, end_date, start_time, end_time) VALUES (?, ?, ?, ?, ?, ?)"
        );

        $stmt->bind_param("ssssss", $event, $poc, $start, $end, $startTime, $endTime);

        $stmt->execute();

        $stmt->close();

        header("location: " . $_SERVER["PHP_SELF"] . "?success=1");
        exit;
    } else {
        header("Location: " . $_SERVER["PHP_SELF"] . "?error=1");
        exit;
    }
}

# handle edit appointment

if($_SERVER["REQUEST_METHOD"] === "POST" && ($_POST["action"] ?? '') === 'edit') {
    $id = $_POST["event_id"] ?? null;
    $event = trim($_POST["event_name"] ?? '');
    $poc = trim($_POST["point_of_contact"] ?? '');
    $start = $_POST["start_date"] ?? '';
    $end = $_POST["end_date"] ?? '';
    $startTime = $_POST['start_time'] ?? '';
    $endTime = $_POST['end_time'] ?? '';

    if($id && $event && $poc && $start && $end && $startTime && $endTime) {
        $stmt = $conn->prepare(
            "UPDATE events SET event_name = ?, point_of_contact = ?, start_date = ?, end_date = ?, start_time = ?, end_time = ? WHERE id= ?"
        );

        $stmt->bind_param("ssssssi", $event, $poc, $start, $end, $startTime, $endTime, $id);

        $stmt-> execute();

        $stmt->close();

        header("Location: " . $_SERVER["PHP_SELF"] . "?success=2");
        exit;
    } else {
        header("Location: " . $_SERVER["PHP_SELF"] . "?error=2");
        exit;
    }
}

# handle delete appointment 

if($_SERVER["REQUEST_METHOD"] === "POST" && ($_POST["action"] ?? '') === "delete") {
    $id = $_POST['event_id'] ?? null;

    if ($id) {
        $stmt = $conn->prepare("DELETE FROM events WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->close();
        header("Location: " . $_SERVER["PHP_SELF"] . "?success=3");
        exit;
    }
}

# success & error messages

if(isset($_GET["success"])) {
    $successMsg = match ($_GET["success"]) {
        '1' => "✅ Event added successfully",
        '2' => "✅ Event updated successfully",
        '3' => "🗑️ Event deleted successfully",
        default => ''
    } ;
}

if (isset($_GET["error"])) {
    $errorMsg = '⚠️ Error occurred, please check your inputs';
}

// 📆 fetch all events and spread over date range

$result = $conn->query('SELECT * FROM events');

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $start = new DateTime($row["start_date"]);
        $end = new DateTime($row["end_date"]);

        while ($start <= $end) {
            $eventsFromDB[] = [
                'id' => $row["id"],
                'title' => "{$row['event_name']} - {$row['point_of_contact']}",
                "date" => $start->format('Y-m-d'),
                "start" => $row["start_date"],
                "end" => $row["end_date"],
                "start_time" => $row["start_time"],
                "end_time" => $row["end_time"]
            ];

            $start->modify('+1 day');
        }
    }
}

$conn->close();
?>