<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login_sample_db";

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $type = $_POST["type"];
    $passengers = $_POST["passengers"];
    $destinationfrom = $_POST["destinationfrom"];
    $destinationto = $_POST["destinationto"];
    $leaving = $_POST["leaving"];
    $arrival = $_POST["arrival"];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO `booktrans` (`type`, `passengers`, `destinationfrom`, `destinationto`, `leaving`, `arrival`) 
                            VALUES (?, ?, ?, ?, ?, ?)");

    $stmt->bind_param("sissss", $type, $passengers, $destinationto, $destinationfrom, $leaving, $arrival);

    // Execute the query
    if ($stmt->execute()) 
    {
        echo "Booking Successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Your Trip</title>
    <link rel="stylesheet" href="Booking.css">
</head>
<body>
    <header>
        <div class="nav-container">
            <a href="home.html" class="logo">STDA Travel Agency</a>
            <nav>
                <ul class="nav-links">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="hotels.html">Hotels</a></li>
                    <li><a href="transportation.html">Transportation</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>
            <select id="language-selector">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
            </select>
            <a href="sign in.html" class="btn">Log In</a>
        </div>
    </header>
    <section class="booking">
        <h1>BOOK YOUR TRANSPORTATION!</h1>
        <form method="POST">
            <div class="form-container">
                <div class="form-group">
                    <label for="type">Transportation Type:</label>
                    <input type="text" id="type" name="type" placeholder="Enter the transportation type" list="cars" required>
                    <datalist id="cars">
                        <option value="flight">
                        <option value="car">
                        <option value="bus">
                    </datalist>
                </div>
                <div class="form-group">
                    <label for="destinationfrom">From:</label>
                    <input type="text" id="from" name="destinationfrom" placeholder="Place from where" required>
                </div>
                <div class="form-group">
                    <label for="destinationto">To:</label>
                    <input type="text" id="to" name="destinationto" placeholder="Place You Want To Visit" required>
                </div>
                <div class="form-group">
                    <label for="passengers">How Many:</label>
                    <input type="number" id="passengers" name="passengers" placeholder="Number Of Guests" required>
                </div>
                <div class="form-group">
                    <label for="arrival">Arrival Date:</label>
                    <input type="date" id="arrival" name="arrival" required>
                </div>
                <div class="form-group">
                    <label for="leaving">Leaving Date:</label>
                    <input type="date" id="leaving" name="leaving" required>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
    <script src="booking.js"></script>
</body>
</html>