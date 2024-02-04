import { Display } from "./display.module.js";
export class Categories {
  async getCategories() {
    $(".inner-loading-screen").addClass("d-flex");
    $(".inner-loading-screen").fadeIn(300);
    let response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    let data = await response.json();

    this.displayCategories(data);
    $(".inner-loading-screen").fadeOut(300, () => {
      $(".inner-loading-screen").removeClass("d-flex");
    });
  }
  displayCategories(categories) {
    let cartona = "";
    let data = categories.categories;
    for (let i = 0; i < data.length; i++) {
      cartona += `
        <div class="col-md-3">
              <div class="category position-relative overflow-hidden rounded-2" data-cat=${
                data[i].strCategory
              }>
                <img class="w-100" src=${data[i].strCategoryThumb} alt="" />
                <div
                  class="cat-layer cat-click position-absolute top-100 start-0 text-center w-100 h-100 text-black p-2"
                >
                  <h3 class="cat-click text-capitalize">${
                    data[i].strCategory
                  }</h3>
                  <p class="cat-click">
                    ${data[i].strCategoryDescription
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")}
                  </p>
                </div>
              </div>
            </div>
        `;
    }
    $(".firstPage .container .origin").html(cartona);
  }
  async getMealCategories(cat) {
    $(".inner-loading-screen").addClass("d-flex");
    $(".inner-loading-screen").fadeIn(300);
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
    response = await response.json();
    console.log(response);
    this.displayMealCategories(response);
    $(".inner-loading-screen").fadeOut(300, () => {
      $(".inner-loading-screen").removeClass("d-flex");
    });
  }
  displayMealCategories(data) {
    let cartona = "";
    let mealsCat = data.meals;
    for (let i = 0; i < mealsCat.length && i < 20; i++) {
      cartona += `
      <div class="col-md-3">
              <div
                class="meal position-relative overflow-hidden rounded-2" data-id=${mealsCat[i].idMeal}
              >
                <img class="w-100" src="${mealsCat[i].strMealThumb}" alt="${mealsCat[i].strMeal}" />
                <div
                  class="meal-layer position-absolute top-100 start-0 d-flex align-items-center w-100 h-100 text-black p-2"
                >
                  <h3>${mealsCat[i].strMeal}</h3>
                </div>
              </div>
            </div>
      
      `;
      $(".firstPage .container .origin").html(cartona);
    }
  }
}
