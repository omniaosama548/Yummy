const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");
const navItems = navList.querySelectorAll("li");
const sideNav = document.getElementById("side-nav");
let isOpen = false;

menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    navList.classList.add("show");
    sideNav.classList.add("move");
    menuToggle.innerHTML = '<i class="fas fa-times fs-1"></i>';
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 100);
    });
  } else {
    navList.classList.remove("show");
    sideNav.classList.remove("move");
    menuToggle.innerHTML = '<i class="fas fa-bars fs-1"></i>';
    navItems.forEach((item) => item.classList.remove("show"));
  }
});
function displayAreas(areas){
  const container = document.getElementById("meals-container");
  container.innerHTML=areas.map((area)=>
    `
   <div class="col-md-3">
      <div class="text-center mt-2 area-detail" data-id="${area.strArea}">
      <i class="fa-solid fa-house-laptop fa-4x"></i>
      <h2>${area.strArea}</h2>
      </div>
   </div>
  `
  ).join('');
  //click on area to get meals
   document.querySelectorAll(".area-detail").forEach((element) => {
    element.addEventListener("click", function () {
      const areaMeal= this.dataset.id;
      console.log(areaMeal);
    window.location.href = `area-meals.html?id=${areaMeal}`;
    });
  });
  }
  async function fetchArea(){
    const res=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const data=await res.json();
    const areas=data.meals;
    displayAreas(areas);
  }
  fetchArea(); 