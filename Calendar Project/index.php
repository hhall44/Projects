<?php

include "calendar.php";

?>


<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calendar Project</title>

        <meta name="description" content="My first calendar project with PHP and MySQL">

        <link rel="stylesheet" href="styles.css">

        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    </head>

    <body>

        <header>
            <h1>📆 My Calendar Project</h1>
        </header>

        <!-- Clock -->
        <div class="clock-container">
            <div id="clock"></div>
        </div>

        <!-- Calendar section -->
        <div class="calendar">
            <div class="nav-btn-container">
                <button class="nav-btn">←</button>
                <h2 id="monthYear" style="margin: 0"></h2>
                <button class="nav-btn">→</button>
            </div>

            <div class="calendar-grid" id="calendar"></div>
        </div>

        <!-- Modal for add/edit/delete appointment -->
         <div class="modal" id="eventModal">
            <div class="modal-content">

         <div id="eventSelectorWrapper">
            <label for="eventSelector">
                <strong>Select Event:</strong>
            </label>
            <select id="eventSelector">
                <option disabled selected>Chose Event...</option>
            </select>
         </div>

         <!-- Main Form -->

         <form method="POST" id="eventForm">
            <input type="hidden" name="action" id="formAction" value="add">
            <input type="hidden" name="event_id" id="eventId">

            <label for="eventName">Event Title:</label>
            <input type="text" name="event_name" id="eventName" required>

            <label for="POC">Point of Contact:</label>
            <input type="text" name="point_of_contact" id="POC" required>

            <label for="startDate">Start Date:</label>
            <input type="date" name="start_date" id="startDate" required>

            <label for="endDate">End Date:</label>
            <input type="date" name="end_date" id="endDate" required>

            <label for="startTime">Start Time:</label>
            <input type="time" name="start_time" id="startTime" required>

            <label for="endTime">End Time:</label>
            <input type="time" name="end_time" id="endTime" required>

            <button type="submit">💾 Save</button>
         </form>

         <!-- Delete form -->

         <form method="POST" onsubmit="return confirm('Are you sure you want to delete this event?')">
            <input type="hidden" name="action" value="delete">
            <input type="hidden" name="event_id" id="deleteEventId">
            <button type="submit" class="submit-btn">🗑️ Delete</button>
         </form>

        <!-- ❌ Cancel -->
        <button type="button" class="submit-btn">❌ Cancel</button>

    </div>
</div>

        <script>
            const events = <?php echo isset($eventsFromDB) ? json_encode($eventsFromDB, JSON_UNESCAPED_UNICODE) : '[]'; ?>;
        </script>
        
        <script src="calendar.js"></script>

    </body>

</html>
