    function updateTotalPrice() {
        const cartItems = document.querySelectorAll('.cart-item');
        let totalPrice = 0;

        // Loop through each cart item to calculate total price
        cartItems.forEach(item => {
            const priceElement = item.querySelector('.price');
            const price = parseFloat(priceElement.textContent.replace('₱', ''));
            totalPrice += price;
        });

        // Display total price in the bottom part of cart container
        const totalPriceElement = document.querySelector('.total-price');
        totalPriceElement.textContent = `Total: ₱${totalPrice.toFixed(2)}`;
    }
    
        // Add event listener for the add button
        addButton.addEventListener('click', function() {
            // Process selected add-ons
            const selectedAddOns = Array.from(addOnsContainer.querySelectorAll('input[type="checkbox"]:checked'))
                .map(checkbox => ({
                    name: checkbox.value,
                    price: parseFloat(checkbox.dataset.price) // Retrieve price from data attribute
                }));
    
            // Update the total price display in the main modal or wherever it's appropriate in your UI
            const totalPriceElement = document.querySelector('.total-price');
            let currentTotalPrice = parseFloat(totalPriceElement.textContent.replace('Total: ₱', ''));
            const newTotalPrice = currentTotalPrice + totalPrice;
            totalPriceElement.textContent = `Total: ₱${newTotalPrice.toFixed(2)}`;
    
            // Close the add-ons modal
            addOnsModal.style.display = 'none';
        });
    
        function confirmOrder() {
            // Check if there are any items in the cart
            const cartItems = document.querySelectorAll('.cart-item');
            if (cartItems.length === 0) {
                // If no items in the cart, display a message to the user on the page
                const emptyCartMessage = document.createElement('div');
                emptyCartMessage.textContent = "Your cart is empty. Please add items to your cart before confirming the order.";
                emptyCartMessage.classList.add('empty-cart-message');
        
                // Append the message to the cart container
                const cartContainer = document.querySelector('.cart-container');
                cartContainer.appendChild(emptyCartMessage);
        
                // Hide the message after a certain duration
                setTimeout(() => {
                    emptyCartMessage.remove();
                }, 1000);
        
                return; // Exit the function
            }
        
            // If there are items in the cart, proceed with showing the confirmation modal
            var confirmationModalOverlay = document.querySelector('.confirmation-modal-overlay');
            var confirmationModals = document.querySelector('.confirmation-modals');
        
// Clone cart items
var clonedCartItems = [];
cartItems.forEach(function(cartItem) {
    var clonedCartItem = cartItem.cloneNode(true); // Clone the cart item
    
    var quantity = clonedCartItem.querySelector('.quantity').textContent.trim(); // Get quantity
    if (parseInt(quantity) > 1) { // Check if quantity is greater than 1
        var quantityElement = document.createElement('span'); // Create a new span element
        quantityElement.textContent = quantity + 'x '; // Set text content to display quantity
        clonedCartItem.querySelector('.name').prepend(quantityElement); // Prepend the quantity element to the name container
    }

    // Remove increment and decrement buttons
    var buttons = clonedCartItem.querySelectorAll('.increment, .decrement');
    buttons.forEach(function(button) {
        button.remove();
    });

    clonedCartItems.push(clonedCartItem); // Add the cloned cart item to the array
});

        
            // Append cloned cart items to the confirmation modal
            var existingCartItemContainers = document.querySelectorAll('.existing-cart-item');
            existingCartItemContainers.forEach(function(container) {
                container.innerHTML = ''; // Clear existing content
                clonedCartItems.forEach(function(clonedCartItem) {
                    // Check if the item is already in the modal
                    const itemName = clonedCartItem.dataset.itemName;
                    const itemSize = clonedCartItem.dataset.itemSize;
                    const itemAddons = clonedCartItem.dataset.itemAddons;
                    const existingItems = container.querySelectorAll('.cart-item');
                    let itemExists = false;
                    existingItems.forEach(function(existingItem) {
                        if (
                            existingItem.dataset.itemName === itemName &&
                            existingItem.dataset.itemSize === itemSize &&
                            existingItem.dataset.itemAddons === itemAddons
                        ) {
                            itemExists = true;
                        }
                    });
                    // If the item doesn't exist, append it
                    if (!itemExists) {
                        container.appendChild(clonedCartItem); // Append cloned cart items
                    }
                });
            });
        
            confirmationModalOverlay.style.display = 'block';
            confirmationModals.style.display = 'block';
        }
        
    

    function closeConfirmationModals() {
        var confirmationModalOverlay = document.querySelector('.confirmation-modal-overlay');
        var confirmationModals = document.querySelector('.confirmation-modals');
        confirmationModalOverlay.style.display = 'none';
        confirmationModals.style.display = 'none';
    
        // Clear existing items in the confirmation modal
        var existingCartItemContainers = document.querySelectorAll('.existing-cart-item');
        existingCartItemContainers.forEach(function(container) {
            container.innerHTML = ''; // Clear existing content
        });
    }

// Function to handle click event on the edit icon
function handleEditIcon(event) {
    // Retrieve the parent cart item element
    const cartItem = event.target.closest('.cart-item');
    // Retrieve product details from the cart item
    const productName = cartItem.querySelector('.name').textContent;
    const productPrice = cartItem.querySelector('.price').textContent;
}

// Define variables to store selected item details
let selectedItem = "";
let selectedSize = "";
let selectedAddons = [];

function openModal(categoryName, jsonUrl) {
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            let modal = document.querySelector('.modal');
            let modalTitle = document.getElementById('modal-title');
            let modalListProducts = modal.querySelector('.listProducts');
            modalListProducts.innerHTML = '';
            data.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <h2 class="product-name">${product.name}</h2>
                    <div class="price product-price">${product.price}</div>
                    <div class="size-options hide-on-add-to-cart">
                        <br><p><h3>Size:</h3>
                        <label>
                            <input type="radio" name="size_${product.id}" value="Solo" checked>
                            Solo
                        </label>    
                        <label>
                            <input type="radio" name="size_${product.id}" value="Jumbo">
                            Jumbo
                        </label>
                        <div class="jumbo-price">+₱10.00</div>
                    </div>
                    <div class="addons hide-on-add-to-cart">
                        <h3>Add-ons:</h3>
                        <!-- Display add-ons checkboxes here -->
                        ${generateAddonsCheckboxes()}
                    </div>
                    <button class="add-to-cart" onclick="addToCart(this, '${product.name}', '${product.price}')">Select</button>
                    <button class="confirm-button hide-on-add-to-cart" onclick="confirmAction(this)">Confirm</button>
                    <button class="cancel-button hide-on-add-to-cart" onclick="cancelAction(this)">Close</button>
                `;
                modalListProducts.appendChild(newProduct);
            });
            modalTitle.textContent = categoryName;
            modal.style.display = 'block';

            // Add event listeners to size options
            const sizeOptions = modal.querySelectorAll('.size-options input[type="radio"]');
            sizeOptions.forEach(option => {
                option.addEventListener('change', function() {
                    if (this.value === 'Jumbo') {
                        // Unselect the "Solo" option when "Jumbo" is selected
                        const soloOption = this.parentElement.parentElement.querySelector('input[value="Solo"]');
                        soloOption.checked = false;
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function addToCart(button, productName, productPrice) {
    // Enable the button
    button.disabled = false;

    // Retrieve the parent element of the clicked button
    let parentItem = button.closest('.item');

    console.log("Add to Cart button clicked.");

    // Reset size options to default (select the first option)
    let defaultSizeOption = parentItem.querySelector('.size-options input[type="radio"]:first-child');
    defaultSizeOption.checked = true;

    // Reset add-ons to default (uncheck all)
    parentItem.querySelectorAll('.addon-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Hide product image, name, price, and add-to-cart button
    parentItem.querySelector('.product-image').classList.add('hide-on-add-to-cart');
    parentItem.querySelector('.product-name').classList.add('hide-on-add-to-cart');
    parentItem.querySelector('.product-price').classList.add('hide-on-add-to-cart');
    button.classList.add('hide-on-add-to-cart');

    // Show size options, add-ons, and confirm/cancel buttons
    parentItem.querySelector('.size-options').classList.remove('hide-on-add-to-cart');
    parentItem.querySelector('.addons').classList.remove('hide-on-add-to-cart');
    parentItem.querySelector('.confirm-button').classList.remove('hide-on-add-to-cart');
    parentItem.querySelector('.cancel-button').classList.remove('hide-on-add-to-cart');

    // Store selected item details
    selectedItem = productName;
    selectedSize = parentItem.querySelector('input[name="size"]:checked').value;
    selectedAddons = Array.from(parentItem.querySelectorAll('.addon-checkbox:checked')).map(checkbox => ({
        name: checkbox.dataset.name,
        price: parseFloat(checkbox.dataset.price)
    }));

    console.log("Selected Size:", selectedSize);
    console.log("Selected Add-ons:", selectedAddons);
}

function generateAddonsCheckboxes() {
    // Fetch add-ons data from addons.json or define it here directly
    // For demonstration purposes, let's assume add-ons data is defined here
    const addons = [
        { name: "Espresson Shot", price: 5 },
        { name: "Pearls", price: 10 },
        { name: "Cream Puff", price: 10 },
        { name: "Crystals", price: 10 },
        { name: "Flavor Shot", price: 5 }
        // Add more add-ons as needed
    ];

    let checkboxesHTML = '';
    addons.forEach(addon => {
        checkboxesHTML += `
            <label>
                <input type="checkbox" class="addon-checkbox" data-name="${addon.name}" data-price="${addon.price}">
                ${addon.name} (+₱${addon.price})
            </label><br>
        `;
    });
    return checkboxesHTML;
}


function confirmAction(button) {
    // Retrieve the parent element of the clicked button
    let parentItem = button.closest('.item');

    // Hide size and add-ons elements
    parentItem.querySelector('.size-options').classList.add('hide-on-add-to-cart');
    parentItem.querySelector('.addons').classList.add('hide-on-add-to-cart');

    // Unhide product image, name, add-to-cart button, and price
    parentItem.querySelector('.product-image').classList.remove('hide-on-add-to-cart');
    parentItem.querySelector('.product-name').classList.remove('hide-on-add-to-cart');
    parentItem.querySelector('.add-to-cart').classList.remove('hide-on-add-to-cart');
    parentItem.querySelector('.product-price').classList.remove('hide-on-add-to-cart');

    // Hide the confirm and cancel buttons
    parentItem.querySelector('.confirm-button').classList.add('hide-on-add-to-cart');
    parentItem.querySelector('.cancel-button').classList.add('hide-on-add-to-cart');

    // Enable the "Add to Cart" button
    parentItem.querySelector('.add-to-cart').disabled = false;

        // Retrieve selected item details
        let itemName = parentItem.querySelector('.product-name').textContent;
        let itemSize = parentItem.querySelector('input[name^="size_"]:checked').value;
        let productId = parentItem.querySelector('.add-to-cart').getAttribute('data-product-id'); // Add product ID
        let productPrice = parseFloat(parentItem.querySelector('.product-price').textContent); // Parse product price
        
        // Set the price based on the selected size
        let price;
        if (itemSize === 'Solo') {
            price = 39;
        } else if (itemSize === 'Jumbo') {
            price = 49;
        } else {
            // Handle error: Invalid size selected
            console.error('Invalid size selected');
            return;
        }
        
        // Retrieve selected add-ons
        let selectedAddons = [];
        parentItem.querySelectorAll('.addon-checkbox:checked').forEach(addon => {
            selectedAddons.push({
                name: addon.dataset.name,
                price: parseFloat(addon.dataset.price)
            });
        });
        
        // Add add-on prices to the total price
        selectedAddons.forEach(addon => {
            price += addon.price;
        });
        
        // Retrieve the existing total price from the cart container
        let totalPriceElement = document.querySelector('.total-price');
        let currentTotalPrice = parseFloat(totalPriceElement.textContent.replace('Total: ₱', ''));
        
        // Update the total price in the cart container by adding the price of the new product
        let newTotalPrice = currentTotalPrice + price;
        totalPriceElement.textContent = `Total: ₱${newTotalPrice.toFixed(2)}`;
        
        // Display selected item, size, add-ons, and total price in the cart container
        addToCartContainer(itemName, itemSize, selectedAddons, price);

        parentItem.querySelector('.add-to-cart').disabled = false;

        // Display selected item, size, add-ons, and total price in the cart container
        addToCartContainer(itemName, itemSize, selectedAddons, productPrice, productId);
    }
    
    function addToCartContainer(itemName, itemSize, selectedAddons, totalPrice, quantity = 1) {
        // Construct a string to represent the selected addons
        let addonsHTML = '';
        selectedAddons.forEach(addon => {
            addonsHTML += `${addon.name}<br>`;
        });
    
        // Check if the item already exists in the cart
        const existingCartItem = document.querySelector(`.cart-item[data-item-name="${itemName}"][data-item-size="${itemSize}"][data-item-addons="${addonsHTML}"]`);
    
        if (existingCartItem) {
            // If the item exists, update its quantity
            const quantityElement = existingCartItem.querySelector('.quantity');
            let newQuantity = parseInt(quantityElement.textContent) + quantity; // Increment quantity
            quantityElement.textContent = newQuantity; // Update quantity text content
    
            // Update the total price of the existing item
            const totalPriceElement = existingCartItem.querySelector('.price');
            let totalPriceValue = parseFloat(totalPriceElement.textContent.replace('₱', ''));
    
            // Check if totalPrice is a valid number before adding it
            if (!isNaN(parseFloat(totalPrice))) {
                totalPriceValue += parseFloat(totalPrice) * quantity; // Update total price
                totalPriceElement.textContent = `₱${totalPriceValue.toFixed(2)}`;
            }
        } else {
            // If the item does not exist, create a new cart item
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
    
            cartItem.dataset.itemName = itemName;
            cartItem.dataset.itemSize = itemSize;
            cartItem.dataset.itemAddons = addonsHTML;
    
            cartItem.innerHTML = `
                <div class="item-details">
                    <span class="quantity">${quantity} x</span><!-- Display quantity here -->
                    <span class="name">${itemName} (${itemSize})</span><br>
                    <span class="add">Add-ons:<br></span>
                    <span class="addons">${addonsHTML}</span>
                </div>
                <span class="price">₱${parseFloat(totalPrice * quantity).toFixed(2)}</span>
                <span class="delete-item" onclick="showDeleteConfirmation(this)"><img src="delete-icon.png" alt="Delete"></span> <!-- Add delete icon here -->
            `;
    
            // Append the new cart item to the listCart container
            const listCart = document.querySelector('.listCart');
            listCart.appendChild(cartItem);
        }
    }
// Function to remove a cart item
function removeCartItem(deleteIcon) {
    const cartItem = deleteIcon.closest('.cart-item');
    cartItem.remove(); // Remove the cart item from the DOM
    updateTotalPrice(); // Update the total price after removing the item
}   
    
// Add event listener to "Add to Cart" button for adding the same item
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        confirmAction(this);
    });
});

function cancelAction(button) {
    // Retrieve the parent element of the clicked button
    let parentItem = button.closest('.item');

    // Hide size and add-ons elements
    parentItem.querySelector('.size-options').classList.add('hide-on-add-to-cart');
    parentItem.querySelector('.addons').classList.add('hide-on-add-to-cart');

    // Unhide product image, name, add-to-cart button, and price
    parentItem.querySelector('.product-image').classList.remove('hide-on-add-to-cart');
    parentItem.querySelector('.product-name').classList.remove('hide-on-add-to-cart');
    parentItem.querySelector('.add-to-cart').classList.remove('hide-on-add-to-cart');
    parentItem.querySelector('.product-price').classList.remove('hide-on-add-to-cart');

    // Hide the confirm and cancel buttons
    parentItem.querySelector('.confirm-button').classList.add('hide-on-add-to-cart');
    parentItem.querySelector('.cancel-button').classList.add('hide-on-add-to-cart');

    // Enable the "Add to Cart" button
    parentItem.querySelector('.add-to-cart').disabled = false;
}

function displayCancelModal() {
    var cancelModalOverlay = document.querySelector('.cancel-modal-overlay');
    var cancelModal = document.querySelector('.cancel-modal');
    cancelModalOverlay.style.display = 'block';
    cancelModal.style.display = 'block';
}

function closeCancelModal() {
    var cancelModalOverlay = document.querySelector('.cancel-modal-overlay');
    var cancelModal = document.querySelector('.cancel-modal');
    cancelModalOverlay.style.display = 'none';
    cancelModal.style.display = 'none';
}

function cancelOrder() {
    // Logic to cancel the order goes here
    // For now, let's just redirect to the homepage
    window.location.href = 'landingPage.html'; // Change to the appropriate URL
}
// Function to show the delete confirmation modal
function showDeleteConfirmation(deleteIcon) {
    // Get the item name
    const itemName = deleteIcon.closest('.cart-item').querySelector('.name').innerText;

    // Get the delete modal element
    const deleteModal = document.getElementById('deleteModal');

    // Update the message with the item name
    deleteModal.querySelector('.message').textContent = `Are you sure you want to delete "${itemName}" from your cart?`;

    // Add event listener to delete confirmation buttons
    const deleteYesBtn = document.querySelector('.delete-yes');
    deleteYesBtn.addEventListener('click', function() {
        deleteItem(deleteIcon); // Call deleteItem function when user confirms
        deleteModal.style.display = 'none'; // Hide the delete modal
    });

    const deleteNoBtn = document.querySelector('.delete-no');
    deleteNoBtn.addEventListener('click', function() {
        deleteModal.style.display = 'none'; // Hide the delete modal if user cancels
    });

    // Show the delete confirmation modal
    deleteModal.style.display = 'block';
}

// Function to delete the item
function deleteItem(deleteIcon) {
    // Perform delete action here
    const cartItem = deleteIcon.closest('.cart-item');
    cartItem.remove(); // Remove the cart item from the DOM
    updateTotalPrice(); // Update the total price after removing the item

    // Close the delete confirmation modal
    const deleteModal = document.getElementById('deleteModal');
    deleteModal.style.display = 'none';
}
