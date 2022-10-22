// Elements
const showFilterAdvanced = document.querySelector("#js-toggle-advance-search");
// Event listener
showFilterAdvanced.addEventListener("click", () => {
   const show = showFilterAdvanced.classList.contains("show");

   if (show) {
      showFilterAdvanced.classList.add("hide");
      showFilterAdvanced.classList.remove("show");
      showFilterAdvanced.innerText = "Tìm kiếm nâng cao";
      console.log(".....show");
   } else {
      showFilterAdvanced.classList.remove("hide");
      showFilterAdvanced.classList.add("show");
      showFilterAdvanced.innerText = "Đóng";
      console.log(".....hide");
   }
});
$(document).ready(function () {
   $('.menu-toggle i').click(function () {
      $('nav').toggleClass('active')
   })
   $('#js-toggle-advance-search').click(function () {
      $('.mobile-search-advance').toggleClass('d-block')
   })
})