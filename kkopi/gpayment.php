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
            overflow: hidden; /* Prevent scrolling */
        }
        .container {
            position: relative;
            width: 100%;
            height: 100%;
        }
        .message {
            font-size: 25px;
            position: absolute;
            bottom: 20px; /* Adjust as needed */
            left: 0;
            right: 0;
            text-align: center;
            color: black;
            z-index: 2; /* Ensure message appears on top of image */
            margin-bottom: 80px;
        }
        .overlay-image {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ensure the image covers the whole space */
            z-index: 1; /* Ensure image appears behind message */
        }
    </style>
</head>
<body>
    <div class="container">
        <?php
        $overlayImage = 'SCAN.png'; // Replace with your overlay image URL
        ?>
        <img class="overlay-image" src="<?php echo $overlayImage; ?>" alt="Overlay Image">
        <div class="message">
            Tap To Close
        </div>
    </div>

    <script>
        // Add event listener for click event
        document.addEventListener("click", function() {
            // Redirect to landingPage.html when clicked
            window.location.href = "landingPage.php";
        });
    </script>
</body>
</html>
