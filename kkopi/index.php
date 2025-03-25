<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kkopi.Tea</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="index.js">
</head>
<body>

<?php
$products = [
    ["title" => "Best Seller", "image" => "img/bs.png", "file" => "bestseller.json"],
    ["title" => "Iced Latte", "image" => "img/3.png", "file" => "iced_latte.json"],
    ["title" => "Hot Drinks", "image" => "img/1.png", "file" => "hot_drinks.json"],
    ["title" => "Bubble Tea", "image" => "img/4.png", "file" => "bubble_tea.json"],
    ["title" => "Non Caffeine", "image" => "img/7.png", "file" => "non_caffeine.json"],
    ["title" => "Amerikano", "image" => "img/2.png", "file" => "amerikano.json"],
    ["title" => "Fruit Teas", "image" => "img/5.png", "file" => "fruit_teas.json"]
];
?>

<div class="modal" style="display: none;">
    <div class="modal-content">
        <div class="modal-body">
            <h2 id="modal-title"></h2>
            <div class="listProducts"></div>
        </div>
    </div>
</div>

<nav class="sidebar">
    <header>
        <h2>MENU</h2>
    </header>
    <div class="wrapper">
        <?php foreach ($products as $product): ?>
            <div class="card" onclick="openModal('<?php echo $product['title']; ?>', '<?php echo $product['file']; ?>')">
                <div class="content">
                    <div class="img"><img src="<?php echo $product['image']; ?>" alt=""></div>
                    <div class="details">
                        <p><?php echo $product['title']; ?></p>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</nav>

<div class="cart-container">
    <div class="cart">
        <div class="name" style="padding-bottom: 20px;"><strong>YOUR ORDER</strong></div>
        <div class="listCart">
            <div class="total-price">
                Total: <span id="totalPrice">₱0.00</span>
            </div>
            <button class="edit-button" style="display: none;" onclick="openAddOnsModal(event)">Add-ons</button>
            <div class="buttons">
                <button class="done" onclick="confirmOrder()">Confirm Order</button>
                <button class="cancel-order" onclick="displayCancelModal()">Cancel Order</button>
            </div>
        </div>
    </div>
</div>

<div class="cancel-modal-overlay" style="display: none;"></div>

<div class="cancel-modal" style="display: none;">
    <div class="cancel-modal-content">
        <div class="message">Are you sure you want to cancel your order?</div>
        <div class="options">
            <button class="yes" onclick="cancelOrder()">Yes</button>
            <button class="no" onclick="closeCancelModal()">No</button>
        </div>
    </div>
</div>

<div class="confirmation-modal-overlay" style="display: none;"></div>

<div class="confirmation-modals" style="display: none;">
    <div class="confirmation-modals-content">
        <div class="message">Review Your Order</div>
        <div class="existing-cart-item"></div>
        <div class="options">
            <button class="yes" href="method.html" onclick="placeOrder()">Proceed to Payment</button>
            <button class="no" onclick="closeConfirmationModals()">Back</button>
        </div>
    </div>
</div>

<div id="deleteModal" class="confirmation-modal">
    <div class="confirmation-modal-content">
        <div class="message">Are you sure you want to delete this item from your cart?</div>
        <div class="options">
            <button class="delete-yes button">Yes</button>
            <button class="delete-no button">No</button>
        </div>
    </div>
</div>

<script>
function displayBestSeller() {
    openModal('Best Seller', 'bestseller.json');
}
function placeOrder() {
    window.location.href = 'method.php';
}
</script>

<script src="index.js"></script>

<body onload="displayBestSeller()"></body>
</html>
