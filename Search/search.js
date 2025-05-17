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
function getMeals(meals) {
  const container = document.getElementById("meals-container");
  container.innerHTML = meals
    .map(
      (meal) => `
     <div class="col-md-3">
      <div class="card meal-card" data-id="${meal.idMeal}"> 
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="meal-overlay ps-2">
           ${meal.strMeal}
        </div>
        </div>
      </div>
   `
    )
    .join("");
  //click on the card
  document.querySelectorAll(".meal-card").forEach((element) => {
    element.addEventListener("click", function () {
      const id = this.dataset.id;
      console.log(id);
      window.location.href = `../meal-details.html?id=${id}`;
    });
  });
}
    document
    .getElementById("search-name")
    .addEventListener("input", async function () {
      const query = this.value.trim();
      if (query === "") return;
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      getMeals(data.meals);
    });
  document
    .getElementById("search-letter")
    .addEventListener("input", async function () {
      const letter = this.value.trim();
      if (letter === "") return;
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
      );
      const data = await res.json();
      getMeals(data.meals);
    });
