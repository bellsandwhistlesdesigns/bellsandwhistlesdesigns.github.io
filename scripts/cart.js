// Bells and Whistles cart.js

console.log("cart.js is working");

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
    loadCartCount();
    attachBuyHandlers();
    attachCartHandler();

    // Only run cart rendering on cart page
    if (document.getElementById('cartItems')) {
        renderCart();
    }
});

// ---------- ADD TO CART ----------
function attachBuyHandlers() {
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const item = {
                name: this.dataset.product || "Unnamed Product",
                price: parseFloat(this.dataset.price) || 0,
                description: this.dataset.desc || "Service item",
                link: this.getAttribute('href'),
                qty: 1
            };

            addToCart(item);
            showAddedMessage(this);
            animateCart();
        });
    });
}

// ---------- CART BUTTON ----------
function attachCartHandler() {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            window.location.href = "cart.html";
        });
    }
}

// ---------- CART LOGIC ----------
function addToCart(item) {
    let cart = getCart();

    const existing = cart.find(i => i.name === item.name);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push(item);
    }

    saveCart(cart);
    updateCartUI(getTotalItemCount(cart));
}

// ---------- STORAGE ----------
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ---------- UI ----------
function updateCartUI(count) {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

function loadCartCount() {
    const cart = getCart();
    updateCartUI(getTotalItemCount(cart));
}

function getTotalItemCount(cart) {
    return cart.reduce((total, item) => total + item.qty, 0);
}

// ---------- FEEDBACK ----------
function showAddedMessage(button) {
    const message = button.parentElement.querySelector('.added-message');
    if (!message) return;

    message.classList.remove('hidden');
    message.classList.add('show');

    setTimeout(() => {
        message.classList.remove('show');
    }, 2000);
}

// ---------- ANIMATION ----------
function animateCart() {
    const cartBtn = document.getElementById('cartBtn');
    if (!cartBtn) return;

    cartBtn.classList.add('bump');
    setTimeout(() => cartBtn.classList.remove('bump'), 300);
}

// ---------- RENDER CART (cart.html) ----------
function renderCart() {
    const container = document.getElementById('cartItems');
    if (!container) return;

    const cart = getCart();
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        updateTotals(0, 0);
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const div = document.createElement('div');
        div.classList.add('cart-item');

        div.innerHTML = `
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <a href="${item.link}">View</a>
                <p>Qty: ${item.qty}</p>
            </div>

            <div class="item-controls">
                <p>$${itemTotal.toFixed(2)}</p>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;

        container.appendChild(div);
    });

    updateTotals(subtotal, cart.length);
}

// ---------- REMOVE ITEM ----------
function removeItem(index) {
    let cart = getCart();

    cart.splice(index, 1);
    saveCart(cart);

    renderCart();
    updateCartUI(getTotalItemCount(cart));
}

// ---------- TOTALS ----------
function updateTotals(subtotal, itemCount) {
    const delivery = itemCount > 0 ? 0 : 0;
    const taxRate = 0.00;

    const tax = subtotal * taxRate;
    const total = subtotal + delivery + tax;

    const subtotalEl = document.getElementById('subtotal');
    const deliveryEl = document.getElementById('delivery');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (deliveryEl) deliveryEl.textContent = `$${delivery.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}