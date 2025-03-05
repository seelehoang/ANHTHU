document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");

    function renderCart() {
        cartItemsContainer.innerHTML = ""; // Xóa nội dung cũ
        let total = 0;

        cart.forEach((item, index) => {
            let row = document.createElement("tr");
            
            row.innerHTML = `
                <td><img src="${item.image}" width="50"> ${item.name}</td>
                <td>${item.price.toLocaleString()}đ</td>
                <td>
                    <button class="decrease" data-index="${index}">-</button>
                    <span>${item.quantity || 1}</span>
                    <button class="increase" data-index="${index}">+</button>
                </td>
                <td>${(item.price * (item.quantity || 1)).toLocaleString()}đ</td>
                <td><button class="remove" data-index="${index}">❌ Xóa</button></td>
            `;

            cartItemsContainer.appendChild(row);
            total += item.price * (item.quantity || 1); // Tính tổng tiền
        });

        totalPriceElement.innerText = total.toLocaleString()  // Hiển thị tổng tiền
    }

    cartItemsContainer.addEventListener("click", function (e) {
        let index = e.target.dataset.index;

        if (e.target.classList.contains("increase")) {
            cart[index].quantity = (cart[index].quantity || 1) + 1;
        } 
        else if (e.target.classList.contains("decrease") && cart[index].quantity > 1) {
            cart[index].quantity--;
        } 
        else if (e.target.classList.contains("remove")) {
            cart.splice(index, 1);
        }

        localStorage.setItem("cart", JSON.stringify(cart)); // Lưu lại vào localStorage
        renderCart(); // Cập nhật lại giao diện
    });

    renderCart(); // Hiển thị giỏ hàng khi tải trang
})
document.addEventListener("DOMContentLoaded", function () {
    const checkoutButton = document.getElementById("checkout-button");

    if (checkoutButton) {
        checkoutButton.addEventListener("click", function () {
            alert("Đặt hàng thành công! Đang chuyển về trang chủ...");
            window.location.href = "index.html"; // Đổi thành trang chủ của bạn
        });
    }
});
