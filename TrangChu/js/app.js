const navBackground = document.getElementById("navBar");
const navLinks = document.querySelectorAll(".nav-link");
// phần poppub
function showPopup() {
  document.getElementById("popupContainer").style.display = "block";
}
function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}

// Thay đổi backgoud navbar
// #474d56
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  /// cái scrolled này để lấy chiều cao tính từ đầu trang đến vị trí mình scrool nhé . mở console.log() ở phần dưới để xem kĩ nhé
  // console.log(scrolled);

  if (scrolled >= 690) navBackground.style.backgroundColor = "#2b3035";
  else navBackground.style.backgroundColor = "transparent";
});

//Phần này thì hiểu đơn giản là mình đang duyệt qua các thẻ <li> có class là nav-link
// Hàm addEvent để lắng nghe sự kiện click chuột,khi click vào thẻ nào thì mình thêm class"actives" cho thẻ đấy

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    document.querySelector(".actives")?.classList.remove("actives");
    navLink.classList.add("actives");
  });
});
//mode
// banner slideshow

const bannerContent = document.getElementById("banner-content");
let currentIndex = 0;

function showNextSlide() {
  currentIndex++;
  if (currentIndex >= bannerContent.children.length) {
    currentIndex = 0;
  }
  updateSlide();
}

function updateSlide() {
  const translateValue = -currentIndex * 100 + "%";
  bannerContent.style.transform = "translateX(" + translateValue + ")";
}

// Tự động chuyển slide mỗi 3 giây (điều chỉnh nếu cần)
setInterval(showNextSlide, 3000);

// alert liên kết
var zalolink = document.getElementById("zalo-link");
var instagramlink = document.getElementById("Instagram-link");
var tiktoklink = document.getElementById("TikTok-link");

zalolink.onclick = function (event) {
  // Ngăn chặn hành vi mặc định của liên kết
  event.preventDefault();
  // Hiển thị thông báo khi click
  alert("Chúng tôi đang phát triển nền tảng Zalo!");
};
tiktoklink.onclick = function (event) {
  event.preventDefault();
  alert("Chúng tôi đang phát triển nền tảng TikTok!");
};
instagramlink.onclick = function (event) {
  event.preventDefault();
  alert("Chúng tôi đang phát triển nền tảng Instagram!");
};

var buttom_timkiem = document.getElementById("timkiem");
buttom_timkiem.onclick = function () {
  alert("Chức năng đang được phát triển!");
};

// Lọc Tìm Kiếm
document.addEventListener("DOMContentLoaded", function () {
  var inputElement = document.getElementById("input-datalist");
  var datalistElement = document.getElementById("list-timezone");

  inputElement.addEventListener("input", function () {
    var searchTerm = inputElement.value.toLowerCase();

    // Lọc các option trong datalist
    var options = datalistElement.getElementsByTagName("option");
    for (var i = 0; i < options.length; i++) {
      var optionValue = options[i].value.toLowerCase();
      var optionElement = options[i];

      // Hiển thị hoặc ẩn option tùy thuộc vào kết quả tìm kiếm
      if (optionValue.indexOf(searchTerm) !== -1) {
        optionElement.style.display = "block";
      } else {
        optionElement.style.display = "none";
      }
    }
  });
});
