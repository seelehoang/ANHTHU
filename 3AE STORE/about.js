function contactUser(name) {
    alert(`Bạn muốn liên hệ với ${name}?`);
}function contactUser(name) {
    let confirmation = confirm(`Bạn muốn liên hệ với ${name}?`);
    
    if (confirmation) {
        // Lưu tên người được liên hệ vào localStorage
        localStorage.setItem("contactedUser", name);

        // Reload lại trang để tránh confirm() lặp lại
        location.reload();
    }
}


function contactUser(name) {
    let confirmation = confirm(`Bạn muốn liên hệ với ${name}?`);
    
    if (confirmation) {
        // Lưu thông báo vào localStorage để hiển thị trên index.html
        localStorage.setItem("contactMessage", `Bạn đã chọn liên hệ với ${name}. Chúng tôi sẽ sớm hỗ trợ bạn!`);

        // Điều hướng về trang chủ
        window.location.href = "contact.html";
    }
}