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
const filterPriceRange = document.querySelector(".filter-price-range");
const filterPrefix = document.querySelector(".filter-prefix");
const filterNetWork = document.querySelector(".filter-network");
const filterTypeSim = document.querySelector(".filter-type-sim");
const filterSort = document.querySelector(".filter-sort");
const contentFilters = document.querySelector(".content-filters");

// 1. filterPriceRange
filterPriceRange.addEventListener("click", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show ? contentFilters.classList.remove("active-filter") : contentFilters.classList.add("active-filter")}
})
filterPriceRange.addEventListener("mouseleave", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show && contentFilters.classList.remove("active-filter");}
})
// 2. filterPriceRange
filterPrefix.addEventListener("click", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show ? contentFilters.classList.remove("active-filter") : contentFilters.classList.add("active-filter")}
})
filterPrefix.addEventListener("mouseleave", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show && contentFilters.classList.remove("active-filter");}
})
// 3. filterPriceRange
filterNetWork.addEventListener("click", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show ? contentFilters.classList.remove("active-filter") : contentFilters.classList.add("active-filter")}
})
filterNetWork.addEventListener("mouseleave", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show && contentFilters.classList.remove("active-filter");}
})
// 3. filterTypeSim
filterTypeSim.addEventListener("click", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show ? contentFilters.classList.remove("active-filter") : contentFilters.classList.add("active-filter")}
})
filterTypeSim.addEventListener("mouseleave", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show && contentFilters.classList.remove("active-filter");}
})
// 4. filterSort
filterSort.addEventListener("click", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show ? contentFilters.classList.remove("active-filter") : contentFilters.classList.add("active-filter")}
})
filterSort.addEventListener("mouseleave", ()=>{
   const show = contentFilters.classList.contains("active-filter");
   {show && contentFilters.classList.remove("active-filter");}
})
