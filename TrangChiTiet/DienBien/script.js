
        var mySwiper = new Swiper('.swiper-container', {
            // Các tùy chọn Swiper
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // Thêm hình ảnh vào thumbnail container
        var thumbnails = document.getElementById('thumbnail-container');
        var thumbnailImages = [
            '../../TrangChuyenmuc/picture/1.jpg',
            '../../TrangChuyenmuc/picture/2.jpg',
            '../../TrangChuyenmuc/picture/3.jpg',
            '../../TrangChuyenmuc/picture/4.jpg',
        ];

        thumbnailImages.forEach(function (src, index) {
            var thumbnail = document.createElement('img');
            thumbnail.src = src;
            thumbnail.classList.add('thumbnail');
            thumbnail.addEventListener('click', function () {
                mySwiper.slideTo(index); // Chuyển đến ảnh tương ứng khi nhấp vào thumbnail
            });
            thumbnails.appendChild(thumbnail);
        });


      document.addEventListener('DOMContentLoaded', function () {
    // Lấy danh sách các ngày
        var days = document.querySelectorAll('.listDay .day');

        // Duyệt qua từng ngày 
        days.forEach(function (day, index) {
            // Thêm sự kiện click cho ngày
            day.querySelector('.titDay').addEventListener('click', function () {
                // Lấy phần tử chứa thông tin của ngày
                var dayContent = day.querySelector('.contDay');

                // Kiểm tra nếu đang ẩn thì hiển thị, ngược lại ẩn
                if (dayContent.style.display === 'none' || dayContent.style.display === '') {
                    dayContent.style.display = 'block';
                } else {
                    dayContent.style.display = 'none';
                }
            });
        });
    });




    document.addEventListener('DOMContentLoaded', function () {
        // Lấy phần tử có id flag3
        var flag3 = document.getElementById('flag3');

            // Thêm sự kiện click cho tiêu đề của box tour
            flag3.querySelector('.service-more').addEventListener('click', function () {
                // Lấy phần tử chứa nội dung đi kèm
                var serviceMoreContent = flag3.querySelector('.service-more-content');

                // Kiểm tra nếu đang ẩn thì hiển thị, ngược lại ẩn
                if (serviceMoreContent.style.display === 'none' || serviceMoreContent.style.display === '') {
                    serviceMoreContent.style.display = 'block';
                } else {
                    serviceMoreContent.style.display = 'none';
                }
            });
        
    });



    document.addEventListener('DOMContentLoaded', function () {
        // Lấy phần tử có id flag4
        var flag4 = document.getElementById('flag4');

        // Thêm sự kiện click cho tiêu đề của box tour
        flag4.querySelector('.note-more').addEventListener('click', function () {
            // Lấy phần tử chứa nội dung đi kèm
            var noteMoreContent = flag4.querySelector('.note-more-content');

            // Kiểm tra nếu đang ẩn thì hiển thị, ngược lại ẩn
            if (noteMoreContent.style.display === 'none' || noteMoreContent.style.display === '') {
                noteMoreContent.style.display = 'block';
            } else {
                noteMoreContent.style.display = 'none';
            }
        });
    });


//Nút thông báo sau khi gửi thông tin đặt tour
// script.js
$(document).ready(function () {
    // Bắt sự kiện click của nút "Gửi"
    $('#submit-button').click(function () {
        alert('Đặt tour thành công!');
    });
});

    