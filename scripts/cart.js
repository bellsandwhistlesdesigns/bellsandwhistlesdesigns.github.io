// Bells and Whistles cart.js (Enhanced Version)

console.log("cart.js is working");

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
    loadCartCount();
    attachBuyHandlers();
    attachCartHandler();

    if (document.getElementById('cartItems')) {
        renderCart();
        attachCartEvents(); // NEW: event delegation
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

// ---------- EVENT DELEGATION (REPLACES onclick) ----------
function attachCartEvents() {
    const container = document.getElementById('cartItems');

    container.addEventListener('click', (e) => {
        const index = e.target.closest('[data-index]')?.dataset.index;

        if (index === undefined) return;

        // Remove item
        if (e.target.classList.contains('remove-btn')) {
            removeItem(index);
        }

        // Increase qty
        if (e.target.classList.contains('qty-increase')) {
            changeQty(index, 1);
        }

        // Decrease qty
        if (e.target.classList.contains('qty-decrease')) {
            changeQty(index, -1);
        }
    });
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

// ---------- RENDER CART ----------
function renderCart() {
    const container = document.getElementById('cartItems');
    if (!container) return;

    const cart = getCart();
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Looks like you haven’t added any of my work yet.</p>
                <a href="dashboard.html" class="explore-btn">Explore My Projects</a>
            </div>
        `;
        updateTotals(0, 0);
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.setAttribute('data-index', index);

        div.innerHTML = `
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <a href="${item.link}">View</a>
            </div>

            <div class="item-controls">
                <div class="qty-controls">
                    <button class="qty-decrease">−</button>
                    <span>${item.qty}</span>
                    <button class="qty-increase">+</button>
                </div>
                <p>$${itemTotal.toFixed(2)}</p>
                <button class="remove-btn">Remove</button>
            </div>
        `;

        // Entrance animation
        div.style.opacity = "0";
        div.style.transform = "translateY(10px)";

        container.appendChild(div);

        setTimeout(() => {
            div.style.transition = "all 0.3s ease";
            div.style.opacity = "1";
            div.style.transform = "translateY(0)";
        }, 50);
    });

    updateTotals(subtotal, cart.length);
}

// ---------- REMOVE ITEM ----------
function removeItem(index) {
    const container = document.getElementById('cartItems');
    const itemEl = container.querySelector(`[data-index="${index}"]`);

    if (itemEl) {
        itemEl.style.transition = "all 0.3s ease";
        itemEl.style.opacity = "0";
        itemEl.style.transform = "translateX(20px)";
    }

    setTimeout(() => {
        let cart = getCart();
        cart.splice(index, 1);
        saveCart(cart);

        renderCart();
        updateCartUI(getTotalItemCount(cart));
    }, 300);
}

// ---------- CHANGE QTY ----------
function changeQty(index, delta) {
    let cart = getCart();

    cart[index].qty += delta;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);
    renderCart();
    updateCartUI(getTotalItemCount(cart));
}

// ---------- ANIMATED TOTALS ----------
function animateValue(element, start, end, duration = 400) {
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = start + (end - start) * progress;

        element.textContent = `$${value.toFixed(2)}`;

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ---------- TOTALS ----------
function updateTotals(subtotal, itemCount) {
    const delivery = itemCount >  0 ? 5 : 0;
    const taxRate = 0.05;

    const tax = subtotal * taxRate;
    const total = subtotal + delivery + tax;

    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (subtotalEl) animateValue(subtotalEl, 0, subtotal);
    if (taxEl) animateValue(taxEl, 0, tax);
    if (totalEl) animateValue(totalEl, 0, total);
}