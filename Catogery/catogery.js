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
function displayCatogs(catogs){
 const container = document.getElementById("meals-container");
  container.innerHTML = catogs
    .map(
      (catg) => `
     <div class="col-md-3">
      <div class="card-catog meal-card" data-id="${catg.strCategory}"> 
        <img src="${catg.strCategoryThumb}" class="card-img-top" alt="${catg.strCategory}">
        <div class="meal-overlay p-2 text-center flex-column">
           <h4>${catg.strCategory}</h4>
          <P class="object-fit-contain fw-light ">${catg.strCategoryDescription.slice(0, 100)}...</P>
        </div>
        </div>
      </div>
   `
    )
    .join("");
  //click on the card
  document.querySelectorAll(".meal-card").forEach((element) => {
    element.addEventListener("click", function () {
      const catogMeal= this.dataset.id;
      console.log(catogMeal);
       window.location.href = `catog-details.html?id=${catogMeal}`;
    });
  });
  }
  async function fetchCatogeries(){
    const res=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data =await res.json();
    const catogs=data.categories;
    localStorage.setItem("catogeries",JSON.stringify(catogs));
    displayCatogs(catogs);
    console.log(catogs);
  }
  fetchCatogeries()
    