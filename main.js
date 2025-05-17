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
async function fetchMeals() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await response.json();
  const meals = data.meals.slice(0, 20);
  // console.log(meals);
  localStorage.setItem("meals", JSON.stringify(meals));
  displayMeals(meals);
}
function displayMeals(meals) {
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
      window.location.href = `meal-details.html?id=${id}`;
    });
  });
}
//get meals for search only
// function getMeals(meals) {
//   const container = document.getElementById("meals-container");
//   container.innerHTML = meals
//     .map(
//       (meal) => `
//      <div class="col-md-3">
//       <div class="card meal-card" data-id="${meal.idMeal}"> 
//         <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
//         <div class="meal-overlay ps-2">
//            ${meal.strMeal}
//         </div>
//         </div>
//       </div>
//    `
//     )
//     .join("");
//   //click on the card
//   document.querySelectorAll(".meal-card").forEach((element) => {
//     element.addEventListener("click", function () {
//       const id = this.dataset.id;
//       console.log(id);
//       window.location.href = `meal-details.html?id=${id}`;
//     });
//   });
// }
fetchMeals();

// //search
// const search = document.getElementById("search");
// search.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.getElementById("meals-container").innerHTML = "";

//   if (isOpen) {
//     navList.classList.remove("show");
//     sideNav.classList.remove("move");
//     menuToggle.innerHTML = '<i class="fas fa-bars fs-1"></i>';
//     navItems.forEach((item) => item.classList.remove("show"));
//   }
//   document.getElementById("main-search").innerHTML = `
//     <div class="row">
//       <div class="col-md-6 mb-3">
//         <input type="text" id="search-name" class="form-control" placeholder="Search By Name">
//       </div>
//       <div class="col-md-6 mb-3">
//         <input type="text" id="search-letter" maxlength="1" class="form-control" placeholder="Search By First Letter">
//       </div>
//     </div>    
//   `;
//   document
//     .getElementById("search-name")
//     .addEventListener("input", async function () {
//       const query = this.value.trim();
//       if (query === "") return;
//       const res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//       );
//       const data = await res.json();
//       getMeals(data.meals);
//     });
//   document
//     .getElementById("search-letter")
//     .addEventListener("input", async function () {
//       const letter = this.value.trim();
//       if (letter === "") return;
//       const res = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
//       );
//       const data = await res.json();
//       getMeals(data.meals);
//     });
// });

//catogery
// const catogery = document.getElementById("catog");
// catogery.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.getElementById("meals-container").innerHTML = "";

//   if (isOpen) {
//     navList.classList.remove("show");
//     sideNav.classList.remove("move");
//     menuToggle.innerHTML = '<i class="fas fa-bars fs-1"></i>';
//     navItems.forEach((item) => item.classList.remove("show"));
//   }

//  function displayCatogs(catogs){
//  const container = document.getElementById("meals-container");
//   container.innerHTML = catogs
//     .map(
//       (catg) => `
//      <div class="col-md-3">
//       <div class="card-catog meal-card" data-id="${catg.strCategory}"> 
//         <img src="${catg.strCategoryThumb}" class="card-img-top" alt="${catg.strCategory}">
//         <div class="meal-overlay p-2 text-center flex-column">
//            <h4>${catg.strCategory}</h4>
//           <P class="object-fit-contain fw-light ">${catg.strCategoryDescription.slice(0, 100)}...</P>
//         </div>
//         </div>
//       </div>
//    `
//     )
//     .join("");
//   //click on the card
//   document.querySelectorAll(".meal-card").forEach((element) => {
//     element.addEventListener("click", function () {
//       const catogMeal= this.dataset.id;
//       console.log(catogMeal);
//        window.location.href = `catog-details.html?id=${catogMeal}`;
//     });
//   });
//   }
//   async function fetchCatogeries(){
//     const res=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
//     const data =await res.json();
//     const catogs=data.categories;
//     localStorage.setItem("catogeries",JSON.stringify(catogs));
//     displayCatogs(catogs);
//     console.log(catogs);
//   }
//   fetchCatogeries()
// });
//area
// const area=document.getElementById("area");
// area.addEventListener("click",(e)=>{
//     e.preventDefault();
//      document.getElementById("meals-container").innerHTML = "";

//   if (isOpen) {
//     navList.classList.remove("show");
//     sideNav.classList.remove("move");
//     menuToggle.innerHTML = '<i class="fas fa-bars fs-1"></i>';
//     navItems.forEach((item) => item.classList.remove("show"));
//   }
//   function displayAreas(areas){
//   const container = document.getElementById("meals-container");
//   container.innerHTML=areas.map((area)=>
//     `
//    <div class="col-md-3">
//       <div class="text-center mt-2 area-detail" data-id="${area.strArea}">
//       <i class="fa-solid fa-house-laptop fa-4x"></i>
//       <h2>${area.strArea}</h2>
//       </div>
//    </div>
//   `
//   ).join('');
//   //click on area to get meals
//    document.querySelectorAll(".area-detail").forEach((element) => {
//     element.addEventListener("click", function () {
//       const areaMeal= this.dataset.id;
//       console.log(areaMeal);
//     window.location.href = `area-meals.html?id=${areaMeal}`;
//     });
//   });
//   }
//   async function fetchArea(){
//     const res=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
//     const data=await res.json();
//     const areas=data.meals;
//     displayAreas(areas);
//   }
//   fetchArea();
// })
//Ingredients
// document.getElementById("ingredient").addEventListener("click",(e)=>{
//     e.preventDefault();
//     document.getElementById("meals-container").innerHTML = "";

//   if (isOpen) {
//     navList.classList.remove("show");
//     sideNav.classList.remove("move");
//     menuToggle.innerHTML = '<i class="fas fa-bars fs-1"></i>';
//     navItems.forEach((item) => item.classList.remove("show"));
//   }
//   function displayIngredients(ingrediants){
//      const container = document.getElementById("meals-container");
//      container.innerHTML=ingrediants.map((ing)=>`
//      <div class="col-md-3">
//        <div  class=" text-center p-2 card-ing" data-id="${ing.strIngredient}">
//        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
//        <h3>${ing.strIngredient}</h3>
//        <p>${ing.strDescription.slice(0,90)}</p>
//        </div>
//      </div>
//      `).join('')
//      //click on ingredients to get meals
//    document.querySelectorAll(".card-ing").forEach((element) => {
//     element.addEventListener("click", function () {
//       const ingredMeal= this.dataset.id;
//       console.log(ingredMeal);
//     window.location.href = `ingred-meals.html?id=${ingredMeal}`;
//     });
//   });
//   }
//   async function fetchIngredients(){
//     const res=await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
//     const data=await res.json();
//     const ingrediants=data.meals.slice(0,20)
//     console.log(ingrediants)
//     displayIngredients(ingrediants)
//   }
//   fetchIngredients()
// })