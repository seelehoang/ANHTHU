function order(item) {
    alert("Bạn đã chọn mua " + item + ". Vui lòng liên hệ hotline để đặt hàng!");
}
function showAllProducts() {
    alert("Hiển thị toàn bộ sản phẩm!");
}
// function showProductImages(product) {
//     let imageContainer = document.getElementById("image-container");
//     let productImagesSection = document.getElementById("product-images");

//     // Xóa ảnh cũ nếu có
//     imageContainer.innerHTML = "";

//     // Danh sách hình ảnh theo sản phẩm
//     let images = {
//         "acne": ["images/cham_mun/mun_1.jpg", "images/cham_mun/mun_2.jpg", "images/cham_mun/mun_3.jpg"],
//         "serum": ["images/serum_b5/b5_3.jpg", "images/serum_b5/b5_4.jpg", "images/serum_b5/b5_5.jpg"],
//         "face": ["images/kem_face/face_8.jpg", "images/kem_face/face_4.jpg", "images/kem_face/face_5.jpg"]
//     };
    

//     // Thêm ảnh mới vào container
//     if (images[product]) {
//         images[product].forEach(img => {
//             let imgElement = document.createElement("img");
//             imgElement.src = img;
//             imgElement.alt = "Chi tiết sản phẩm";
//             imageContainer.appendChild(imgElement);
//         });

//         // Hiển thị phần hình ảnh
//         productImagesSection.classList.remove("hidden");
//     }
// }
function showProductImages(product) {
    let imageContainer = document.getElementById("image-container");
    let productImagesSection = document.getElementById("product-images");

    if (!imageContainer || !productImagesSection) {
        console.error("Không tìm thấy phần tử chứa hình ảnh.");
        return;
    }

    // Xóa ảnh cũ nếu có
    imageContainer.innerHTML = "";

    // Danh sách hình ảnh theo sản phẩm
    let images = {
        "acne": ["images/cham_mun/mun_1.jpg", "images/cham_mun/mun_3.jpg"],
        "serum": ["images/serum_b5/b5_5.jpg"],
        "face": ["images/kem_face/face_8.jpg", "images/kem_face/face_5.jpg"]
    };

    // Kiểm tra sản phẩm có ảnh không
    if (images[product]) {
        images[product].forEach(img => {
            let imgElement = document.createElement("img");
            imgElement.src = img;
            imgElement.alt = "Chi tiết sản phẩm";
            imgElement.classList.add("zoomable"); // Thêm class zoomable
            imgElement.onclick = function() {
                zoomImage(this);
            };
            imageContainer.appendChild(imgElement);
        });

        // Hiển thị phần hình ảnh
        productImagesSection.classList.remove("hidden");
    } else {
        console.error("Không tìm thấy hình ảnh cho sản phẩm:", product);
    }
}

// Hàm phóng to ảnh khi click vào
function zoomImage(img) {
    let overlay = document.createElement("div");
    overlay.classList.add("image-overlay");

    let zoomedImg = document.createElement("img");
    zoomedImg.src = img.src;
    zoomedImg.classList.add("zoomed-image");

    overlay.appendChild(zoomedImg);
    document.body.appendChild(overlay);

    // Đóng ảnh khi click overlay
    overlay.onclick = function() {
        document.body.removeChild(overlay);
    };
}
function showLoginMessage() {
    alert("3AE STORE XIN CHÀO");
    document.getElementById("login-form").style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("click", function () {
        var content = this.querySelector(".dropdown-content");
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Xử lý click vào các mục dropdown để chuyển trang
    document.querySelectorAll(".dropdown-content a").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

            let link = this.getAttribute("data-link"); // Lấy link từ data-link
            if (link) {
                localStorage.setItem("previousPage", window.location.href); // Lưu trang trước đó
                window.location.href = link; // Chuyển hướng trang
            }
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
});
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".image-grid img"); // Lấy tất cả ảnh sản phẩm
    let priceDisplay = document.getElementById("priceDisplay"); // Thẻ hiển thị giá

    images.forEach(img => {
        img.addEventListener("mouseover", function () {
            let price = this.getAttribute("data-price"); // Lấy giá từ data-price
            priceDisplay.textContent = "Giá: " + price; // Hiển thị giá
        });

        img.addEventListener("mouseleave", function () {
            priceDisplay.textContent = "Di chuột vào ảnh để xem giá"; // Ẩn giá khi rời chuột
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".image-container img");

    images.forEach(img => {
        let priceOverlay = img.nextElementSibling; // Lấy phần tử .price-overlay trong cùng div

        img.addEventListener("mouseover", function () {
            let price = this.getAttribute("data-price");
            priceOverlay.textContent = "Giá: " + price;
        });

        img.addEventListener("mouseleave", function () {
            priceOverlay.textContent = ""; // Ẩn giá khi rời chuột khỏi ảnh
        });
    });
});

    