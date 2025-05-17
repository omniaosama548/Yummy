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
function displayIngredients(ingrediants) {
    const container = document.getElementById("meals-container");
    container.innerHTML = ingrediants.map((ing) => `
     <div class="col-md-3">
       <div  class=" text-center p-2 card-ing" data-id="${ing.strIngredient}">
       <i class="fa-solid fa-drumstick-bite fa-4x"></i>
       <h3>${ing.strIngredient}</h3>
       <p>${ing.strDescription.slice(0, 90)}</p>
       </div>
     </div>
     `).join('')
    //click on ingredients to get meals
    document.querySelectorAll(".card-ing").forEach((element) => {
        element.addEventListener("click", function () {
            const ingredMeal = this.dataset.id;
            console.log(ingredMeal);
            window.location.href = `ingred-meals.html?id=${ingredMeal}`;
        });
    });
}
async function fetchIngredients() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const data = await res.json();
    const ingrediants = data.meals.slice(0, 20)
    console.log(ingrediants)
    displayIngredients(ingrediants)
}
fetchIngredients()