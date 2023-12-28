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
