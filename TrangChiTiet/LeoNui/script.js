

//Nút thông báo sau khi gửi thông tin đặt tour
function showSuccessMessage() {
    // Lấy giá trị từ các ô nhập liệu
    var fullName = document.getElementById('fullName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;

    // Kiểm tra xem các trường đã được điền đầy đủ hay không
    if (fullName && phoneNumber && email) {
        // Hiển thị thông báo thành công
        var successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';

        // Ẩn thông báo sau một khoảng thời gian
        setTimeout(function () {
            successMessage.style.display = 'none';
        }, 5000);
    } else {
        alert('Vui lòng điền đầy đủ thông tin trước khi gửi.');
    }
}


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
    
//header
function toggleSocialIcons() {
    var socialIcons = document.getElementById("social-icons");
    socialIcons.style.display = (socialIcons.style.display === 'none') ? 'block' : 'none';
}


