<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "login_sample_db";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$location = isset($_GET['location']) ? trim($_GET['location']) : '';
$searchTerm = ($location !== '') ? '%' . $location . '%' : '%';

$sql = "SELECT * FROM hotels WHERE location LIKE ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    die("Query preparation failed: " . $conn->error);
}

$stmt->bind_param("s", $searchTerm);
$stmt->execute();
$result = $stmt->get_result();
echo "Number of hotels found: " . $result->num_rows . "<br>";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hotels</title>
  <link rel="stylesheet" href="hotels.css">
</head>
<body>
  <header>
    <div class="nav-container">
      <a href="home.html" class="logo">STDA Travel Agency</a>
      <nav>
        <ul class="nav-links">
          <li><a href="home.html">Home</a></li>
          <li><a href="hotels.php">Hotels</a></li>
          <li><a href="transportation.html">Transportation</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="gallery-section">
    <h2>Hotels in <?php echo htmlspecialchars($location ?: 'All Locations'); ?></h2>
    <div class="gallery-container">
      <?php if ($result->num_rows > 0): ?>
        <?php while ($row = $result->fetch_assoc()): ?>
          <div class="gallery-card">
            <h3><?php echo htmlspecialchars($row['hotel_name']); ?></h3>
            <p>Location: <?php echo htmlspecialchars($row['location']); ?></p>
            <p>Price: £<?php echo htmlspecialchars($row['price_per_night']); ?> / night</p>
            <p>Star Rating: <?php echo htmlspecialchars($row['star_rating']); ?> stars</p>
    
          </div>
        <?php endwhile; ?>
      <?php else: ?>
        <p class="no-results">No hotels found for this destination.</p>
      <?php endif; ?>
    </div>
  </section>
</body>
</html>

<?php $conn->close(); ?>
