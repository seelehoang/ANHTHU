document.addEventListener("DOMContentLoaded", function () {
    // Lọc sản phẩm theo giá
    document.getElementById("priceFilter").addEventListener("change", function () {
        let selectedPrice = this.value;
        let products = document.querySelectorAll(".image-container");

        products.forEach(product => {
            let price = parseInt(product.getAttribute("data-price"));

            // Hiển thị tất cả nếu chọn "Tất cả", hoặc lọc theo giá
            if (selectedPrice === "all" || price <= parseInt(selectedPrice)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    

    // Xử lý sự kiện trên di động (hiệu ứng chạm)
    let containers = document.querySelectorAll(".image-container");
    containers.forEach((container) => {
        container.addEventListener("touchstart", function () {
            this.classList.add("hover-effect");
        });

        container.addEventListener("touchend", function () {
            this.classList.remove("hover-effect");
        });
    });

    // Xử lý nút quay lại
    let backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function () {
            let previousPage = localStorage.getItem("previousPage");
            if (previousPage && previousPage !== window.location.href) {
                window.location.href = previousPage;
            } else {
                window.location.href = "index.html";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let ratings = document.querySelectorAll(".rating");

    ratings.forEach(rating => {
        let productId = rating.getAttribute("data-product-id");
        let stars = rating.querySelectorAll(".star");
        let ratingText = rating.querySelector(".rating-text");

        // Lấy số sao đã lưu trong localStorage
        let savedRating = localStorage.getItem("rating_" + productId);
        if (savedRating) {
            updateStars(stars, savedRating);
            ratingText.innerText = `${savedRating}/5`;
        }

        // Hiệu ứng hover sáng dần
        stars.forEach(star => {
            star.addEventListener("mouseover", function () {
                let hoverValue = this.getAttribute("data-value");
                highlightStars(stars, hoverValue);
            });

            star.addEventListener("mouseout", function () {
                let savedRating = localStorage.getItem("rating_" + productId) || 0;
                updateStars(stars, savedRating);
            });

            // Click để chọn số sao
            star.addEventListener("click", function () {
                let selectedRating = this.getAttribute("data-value");

                // Lưu vào localStorage
                localStorage.setItem("rating_" + productId, selectedRating);

                // Cập nhật UI
                updateStars(stars, selectedRating);
                ratingText.innerText = `${selectedRating}/5`;
            });
        });
    });

    // Hàm cập nhật sao khi chọn
    function updateStars(stars, rating) {
        stars.forEach(star => {
            let value = star.getAttribute("data-value");
            star.classList.toggle("selected", value <= rating);
        });
    }

    // Hàm làm sáng dần sao khi hover
    function highlightStars(stars, rating) {
        stars.forEach(star => {
            let value = star.getAttribute("data-value");
            star.classList.toggle("hovered", value <= rating);
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartIcon = document.getElementById("cart-count");

    function updateCartCount() {
        cartIcon.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    document.querySelectorAll(".buy-now").forEach(button => {
        button.addEventListener("click", function () {
            let productContainer = this.closest(".image-container");
            let product = {
                name: productContainer.querySelector("img").alt,
                image: productContainer.querySelector("img").src,
                price: parseInt(productContainer.getAttribute("data-price")),
                quantity: 1
            };

            let existingProduct = cart.find(item => item.name === product.name);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
            alert("Sản phẩm đã thêm vào giỏ hàng!");
        });
    });

    updateCartCount();
});
// Lưu trữ giỏ hàng trong localStorage để duy trì dữ liệu khi chuyển trang
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cập nhật số lượng sản phẩm trong giỏ hàng trên icon giỏ hàng
function updateCartIcon() {
    let cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length; // Hiển thị số sản phẩm trong giỏ hàng
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(price, name, image) {
    let product = { price: price, name: name, image: image };

    cart.push(product); // Thêm sản phẩm vào mảng giỏ hàng
    localStorage.setItem("cart", JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
    updateCartIcon(); // Cập nhật số lượng sản phẩm trên icon giỏ hàng
}

// Xử lý sự kiện khi nhấn nút "Mua ngay"
document.addEventListener("DOMContentLoaded", function () {
    let buyButtons = document.querySelectorAll(".buy-now");

    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            let container = this.closest(".image-container");
            let price = parseInt(container.getAttribute("data-price")); // Lấy giá sản phẩm
            let name = container.querySelector("img").alt; // Lấy tên sản phẩm từ thuộc tính alt
            let image = container.querySelector("img").src; // Lấy đường dẫn hình ảnh

            addToCart(price, name, image);
            alert(`🛒 Đã thêm vào giỏ hàng: ${name} - ${price.toLocaleString()}đ`);
        });
    });

    updateCartIcon(); // Cập nhật icon giỏ hàng khi tải trang
});