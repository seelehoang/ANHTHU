document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const fasfasearch = document.querySelector('search-btn');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
    });
});


      const searchBox = document.querySelector(".search-box");
      const searchBtn = document.querySelector(".search-icon");
      const searchInput = document.querySelector("input");
      const searchData = document.querySelector(".search-data");
      searchBtn.onclick = () => {
        searchBox.classList.add("active");
        searchBtn.classList.add("active");
        searchInput.classList.add("active");
        cancelBtn.classList.add("active");
        searchInput.focus();
        if(searchInput.value != ""){
          var values = searchInput.value;
          searchData.classList.remove("active");
          searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
        }else{
          searchData.textContent = "";
        }
      }
    //   cancelBtn.onclick =()=>{
    //     searchBox.classList.remove("active");
    //     searchBtn.classList.remove("active");
    //     searchInput.classList.remove("active");
    // 
    //     searchData.classList.toggle("active");
    //     searchInput.value = "";
    //   }
  searchBtn.onclick = () => {
    if(
        searchBox.classList.contains("active")) {
            searchBox.classList.remove("active");
            searchBtn.classList.remove("active");
            searchInput.classList.remove("active");
            searchData.textContent = "";

        }else {
            searchBox.classList.add("active");
            searchBtn.classList.add("active");
            searchInput.classList.add("active");
            searchInput.focus();
        }
  }