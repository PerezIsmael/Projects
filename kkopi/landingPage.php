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
            overflow: hidden;
            background-image: url('your_background_image.jpg'); /* Replace with your background image URL */
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        #logo {
            max-width: 100%;
            height: auto;
            margin-bottom: 20px; /* Adjust as needed */
        }

        #tapToOrder {
            color: black;
            font-size: 24px;
            text-align: center;
            font-family: 'Poppins', sans-serif;
        }

        #logo {
            width: 500px; /* Adjust the width to make the logo bigger */
            height: auto;
            margin-bottom: 20px; /* Adjust as needed */
        }
    </style>
</head>
<body onclick="redirectToOrderPage()">
    <img id="logo" src="kkopi.png" alt="Your Logo"> <!-- Replace with your logo image URL -->
    <div id="tapToOrder">Tap to Order</div>

    <script>
        function redirectToOrderPage() {
            window.location.href = 'index.php'; // Replace with the path to your order page
        }
    </script>
</body>
</html>
