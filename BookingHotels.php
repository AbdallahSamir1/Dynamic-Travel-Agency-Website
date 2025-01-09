<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login_sample_db";

// Database connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}

//ba acess esm al hotel
$hotel_names = [];
$query = "SELECT hotel_name FROM hotels";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $hotel_names[] = $row["hotel_name"];
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $hotel_name = $_POST["hotel_name"];
    $checkin = $_POST["checkin"];
    $checkout = $_POST["checkout"];
    $passenger = $_POST["passenger"];
    $nights = $_POST["nights"];

    // Get price per night
    $stmt = $conn->prepare("SELECT price_per_night FROM hotels WHERE hotel_name = ?");
    $stmt->bind_param("s", $hotel_name);
    $stmt->execute();
    $stmt->bind_result($price_per_night);
    $stmt->fetch();
    $stmt->close();
///total price 
    if ($price_per_night) {
        $total_price = $price_per_night * $nights;

        $stmt = $conn->prepare("INSERT INTO bookhotels (hotel_name, checkin, checkout, passenger, nights, total_price) 
        VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssiii", $hotel_name, $checkin, $checkout, $passenger, $nights, $total_price);
    

        if ($stmt->execute()) {
            echo "Booking successfully added!";
            header("Location: home.html");
            exit;
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Hotel not found.";
    }
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Your Hotel</title>
    <link rel="stylesheet" href="BookingHotels.css">
    <script src="BookingHotels.js"></script>
</head>
<body>
    <header>
        <div class="nav-container">
            <a href="home.html" class="logo"><i class='bx bxs-home'></i>STDA Travel Agency</a>
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
            <a href="login.php" class="btn">Log In</a>
        </div>
    </header>
    <br><br><br>
    <section class="booking">
        <h1>BOOK YOUR HOTEL!</h1>
        <form method="POST" action="BookingHotels.php">
            <div class="form-container">
                <div class="form-group">
                    <label for="hotel_name">Hotel Name:</label>
                    <select id="hotel_name" name="hotel_name" required>
                        <?php foreach ($hotel_names as $name): ?>
                            <option value="<?= $name; ?>"><?= $name; ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                <div class="form-group">
                    <label for="checkin">Check-in Date:</label>
                    <input type="date" id="checkin" name="checkin" required>
                </div>
                <div class="form-group">
                    <label for="checkout">Check-out Date:</label>
                    <input type="date" id="checkout" name="checkout" required>
                </div>
                <div class="form-group">
                    <label for="passenger">Number of Passengers:</label>
                    <input type="number" id="passenger" name="passenger" placeholder="Number of passengers" required>
                </div>
                <div class="form-group">
                    <label for="nights">Number of Nights:</label>
                    <input type="number" id="nights" name="nights" placeholder="Number of nights" required>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
    <script src="BookingHotels.js"></script>
</body>
</html>

