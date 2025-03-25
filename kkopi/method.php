<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kkopi.Tea</title>
<style>

    body {
      background-image: url('bg.png');
    background-size: cover; /* Cover the entire viewport */
    background-position: center; /* Center the background image */
    font-family: 'Poppins', sans-serif; /* Set default font */
  }

    /* Styles for the header text */
  .header-text {
    margin-top: 100px;
    position: absolute;
    top: 20px; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
  }

  .header-text h2 {
    font-size: 45px; /* Adjust font size */
  }

  /* Styles for the option cards */
  .container {
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .option-card {
    width: 300px; /* Increased width */
    height: 420px; /* Increased height */
    border: 2px solid #ccc; /* Increased border thickness */
    border-radius: 20px; /* Increased border radius */
    margin: 20px; /* Increased margin */
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  .option-card:hover {
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2); /* Increased box shadow */
    transform: translateY(-10px); /* Increased translation on hover */
  }
  
  .option-card .highlight {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px; /* Increased border radius */
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .option-card:hover .highlight {
    opacity: 1;
  }
  
  /* Additional styles for content inside the option cards */
  .option-content {
    padding: 20px; /* Increased padding */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .option-content h3 {
    margin-top: 0;
  }

  /* Image styles */
  .option-content img {
    width: 200px; /* Adjust image width */
    height: 200px; /* Adjust image height */
    object-fit: contain; /* Maintain aspect ratio */
    margin-bottom:50px; /* Add space below image */
    margin-top: 50px;
  }
</style>
</head>
<body>

<?php
$backgroundImage = 'bg.png'; // Replace with your background image URL
$counterImage = 'img/counter.png'; // Replace with your Pay at the Counter image URL
$gcashImage = 'img/gcash.png'; // Replace with your Gcash image URL
?>

<div class="container">
  <div class="header-text">
    <h2>How would you like to pay?</h2>
  </div>

<div class="container">
  <div class="option-card" onclick="selectPayment('payatthecounter', 'ty.php')">
    <div class="highlight"></div>
    <div class="option-content">
      <img src="<?php echo $counterImage; ?>" alt="Credit Card">
      <h3>Pay at the Counter</h3>
    </div>
  </div>

  <div class="option-card" onclick="selectPayment('gcash', 'gpayment.php')">
    <div class="highlight"></div>
    <div class="option-content">
      <img src="<?php echo $gcashImage; ?>" alt="PayPal">
      <h3>Gcash</h3>
    </div>
  </div>
</div>

<script>
  // JavaScript function to handle payment selection
  function selectPayment(method, destination) {
    // Here you can implement the logic to handle the selected payment method
    console.log('Selected payment method:', method);
    // Redirect to the destination page
    window.location.href = destination;
  }
</script>

</body>
</html>
