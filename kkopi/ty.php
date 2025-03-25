<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kkopi.Tea</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f2f2f2;
            font-family: 'Poppins', sans-serif;
        }
        .container {
            text-align: center;
        }
        .message {
            font-size: 40px;
            margin-top: 30px;
        }
        .top-image {
            width: 500px; /* Set the width to make it rectangular */
            height: 170px; /* Set the height */
        }
        .center-image {
            width: 300px;
            height: auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php
        $topImage = 'kkopi.png'; // Replace with your top image URL
        ?>
        <img class="top-image" src="<?php echo $topImage; ?>" alt="Top Image">
        <div class="message">
            <p>Please Pay at the Counter and Claim your Order</p>
    </div>

    <script>
        // Add event listener for click event
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
                window.location.href = "landingPage.php";
            }, 6000); // 6000 milliseconds = 6 seconds
        });
    </script>
</body>
</html>
