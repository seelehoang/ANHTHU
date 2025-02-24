// Hiển thị thông báo khi nhấn "Mua ngay"
function showThankYou(button) {
    let price = button.getAttribute("data-price"); // Lấy giá từ data-price
    alert(`🎉 Cảm ơn bạn đã mua hàng! Giá sản phẩm: ${price}`);
}
document.addEventListener("DOMContentLoaded", function () {
    let containers = document.querySelectorAll(".image-container");

    containers.forEach((container) => {
        container.addEventListener("touchstart", function () {
            this.classList.add("hover-effect");
        });

        container.addEventListener("touchend", function () {
            this.classList.remove("hover-effect");
        });
    });
});
 // Xử lý nút quay lại
 let backButton = document.getElementById("backButton");
 if (backButton) {
     backButton.addEventListener("click", function () {
         let previousPage = localStorage.getItem("previousPage");
         if (previousPage && previousPage !== window.location.href) {
             window.location.href = previousPage; // Quay lại trang trước
         } else {
             window.location.href = "index.html"; // Nếu không có trang trước, quay về Trang Chủ
         }
     });
 }