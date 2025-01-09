<?php
session_start();

include("connection.php");
include("functions.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['user_name']) && isset($_POST['password'])) {
        $user_name = $_POST['user_name'];
        $password = $_POST['password'];

        if (!empty($user_name) && !empty($password) && !is_numeric($user_name)) {
            // Read from database
            $query = "SELECT * FROM users WHERE user_name = '$user_name' LIMIT 1";
            $result = mysqli_query($con, $query);

            if ($result && mysqli_num_rows($result) > 0) {
                echo "Username already taken.";
            } else {
                // Insert into database
                $query = "INSERT INTO users (user_name, password) VALUES ('$user_name', '$password')";
                mysqli_query($con, $query);
                echo "Signup successful!";
            }
        } else {
            echo "Please enter some valid information!";
        }
    } 
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>STDA Travel Agency</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com' crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="sign in.css">
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
          <a href="login.php" class="btn">Log In</a>
        </div>
      </header>

    <div class="container">

        <div class="form-box signup">
            <form method="post">
                <h1>Sign up</h1>
                <div class="input-box">
                    <input type="text" name="user_name" placeholder="Username" required>
                    <i class='bx bx-user'></i>
                </div>
                <div class="input-box">
                    <input type="password" name="password" placeholder="Password" required>
                    <i class='bx bx-lock-alt'></i>
                </div>
                <button type="submit" class="button">Sign up</button>
                <p>or register with social platforms</p>
                <div class="social-icons">
                    <a href="*"><i class='bx bxl-google'></i></a>
                    <a href="*"><i class='bx bxl-facebook'></i></a>
                    <a href="*"><i class='bx bxl-linkedin'></i></a>
                </div>
            </form>
        </div>

        <div class="toggle-box">
            <div class="toggle-panel toggle-left">
                <p>Already have an account?</p>
                <a href="login.php">
                    <button class="button signup-button">login</button>
                </a>
            </div>
        </div>

    </div>
</body>
</html>
