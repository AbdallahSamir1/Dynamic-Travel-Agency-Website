<?php
session_start();

include("connection.php");
include("functions.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['user_name']) && isset($_POST['password'])) {
        $user_name = $_POST['user_name'];
        $password = $_POST['password'];

        if (!empty($user_name) && !empty($password) && !is_numeric($user_name)) {
          
            $query = "SELECT * FROM users WHERE user_name = '$user_name' LIMIT 1";
            $result = mysqli_query($con, $query);

            if ($result && mysqli_num_rows($result) > 0) {
                $user_data = mysqli_fetch_assoc($result);
                if ($user_data['password'] === $password) {
                    $_SESSION['user_id'] = $user_data['user_id'];
                    header("Location: home.html");
                    exit;
                } else {
                    echo "Invalid Password";
                }
            } else {
                echo "No user found with that username";
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
    <title>STDA Travel Agency </title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="sign in.css">
</head>

<body>
    <header>
        <div class="nav-container">
          <!-- <div class="logo">Travel</div> -->
          <a href="home.html" class="logo"><i class='bx bxs-home'></i>STDA Travel Agency</a>
          <nav>
            <ul class="nav-links">
              <li><a href="home.html">Home</a></li>
              <li><a href="hotels.html">Hotels</a></li>
              <li><a href="transportation.html">Transportation</a></li>
              <li><a href="about.html">About</a></li>
            </ul>
          </nav>
          <a href="sign in.html" class="btn">Log In</a>
        </div>
      </header>

    <div class="container">
        <div class="form-box">
            <form method="post">
                <h1>Log in</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" required>
                    <i class='bx bx-user'></i>
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Password" required>
                    <i class='bx bx-lock-alt' ></i>
                </div>
                <div class="forgot-link">
                    <a herf="*">Forgot Password?</a> 
                </div>
                <button type="Submit" class="button">Login</button>
                <p>or Login with social platforms</p>
                <div class="social-icons">
                    <a href="*"><i class='bx bxl-google' ></i></a>
                    <a href="*"><i class='bx bxl-facebook' ></i></a>
                    <a href="*"><i class='bx bxl-linkedin' ></i></a>
                </div>
            </form>
        </div>

        <div class="toggle-box">
            <div class="toggle-panel toggle-left">
                <h1>Welcome!</h1>
                <p>Don't have an account?</p>
                <a href="signup.php"> <button class="button signup-button">Sign up</button></a>
            </div>
            <div class="toggle-panel toggle-right">
                <h1>Welcome Back!</h1>
                <p>Already have an account?</p>
                <button class="button signin-button">Log in</button>
            </div>
        </div>

    </div>

</body>

</html>
