export class Ingredients {
  async getIngredients() {
    $(".inner-loading-screen").addClass("d-flex");
    $(".inner-loading-screen").fadeIn(300);
    let res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    res = await res.json();

    this.displayIngredients(res);
    $(".inner-loading-screen").fadeOut(300, () => {
      $(".inner-loading-screen").removeClass("d-flex");
    });
  }
  displayIngredients(data) {
    let cartona = "";
    let ingredients = data.meals;

    for (let i = 0; i < ingredients.length && i < 20; i++) {
      cartona += `
            <div class="col-md-3">
              <div class="ingredient ingredient-click text-center" data-i=${ingredients[
                i
              ].strIngredient
                .split(" ")
                .join("_")}>
                
                <i class="ingredient-click fa-solid fa-drumstick-bite fa-4x" data-i=${ingredients[
                  i
                ].strIngredient
                  .split(" ")
                  .join("_")}></i>
                <h3 class="ingredient-click text-capitalize" data-i=${ingredients[
                  i
                ].strIngredient
                  .split(" ")
                  .join("_")}>${ingredients[i].strIngredient}</h3>
                <p class="ingredient-click" data-i=${ingredients[
                  i
                ].strIngredient
                  .split(" ")
                  .join("_")}>${ingredients[i].strDescription
        .split(" ")
        .slice(0, 20)
        .join(" ")}</p>
                
              </div>
            </div>
            `;
      $(".firstPage .container .origin").html(cartona);
    }
  }
  async getMealsIngredients(term) {
    $(".inner-loading-screen").addClass("d-flex");
    $(".inner-loading-screen").fadeIn(300);
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${term}`
    );
    res = await res.json();
    this.displayMealsIngredients(res);
    $(".inner-loading-screen").fadeOut(300, () => {
      $(".inner-loading-screen").removeClass("d-flex");
    });
  }
  displayMealsIngredients(data) {
    let cartona = "";
    let mealsIng = data.meals;
    for (let i = 0; i < mealsIng.length && i < 20; i++) {
      cartona += `
      <div class="col-md-3">
              <div
                class="meal position-relative overflow-hidden rounded-2" data-id=${mealsIng[i].idMeal}
              >
                <img class="w-100" src="${mealsIng[i].strMealThumb}" alt="${mealsIng[i].strMeal}" />
                <div
                  class="meal-layer position-absolute top-100 start-0 d-flex align-items-center w-100 h-100 text-black p-2"
                >
                  <h3>${mealsIng[i].strMeal}</h3>
                </div>
              </div>
            </div>
      `;
      $(".firstPage .container .origin").html(cartona);
    }
  }
}
