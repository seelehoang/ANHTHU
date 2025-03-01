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

    // Hiển thị thông báo khi nhấn "Mua ngay"
    window.showThankYou = function (price) {
        alert(`🎉 Cảm ơn bạn đã mua hàng! Giá sản phẩm: ${price.toLocaleString()}đ`);
    };

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