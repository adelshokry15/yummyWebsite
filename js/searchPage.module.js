export class SearchPage {
  constructor() {}
  async searchByName(term) {
    $(".inner-loading-screen").addClass("d-flex");
    $(".inner-loading-screen").fadeIn(300);
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    response = await response.json();
    console.log(response);

    response.meals ? this.displayMeals(response.meals) : this.displayMeals([]);
    $(".inner-loading-screen").fadeOut(300, () => {
      $(".inner-loading-screen").removeClass("d-flex");
    });
  }
  async searchByLetter(term) {
    $(".inner-loading-screen").addClass("d-flex");
    $(".inner-loading-screen").fadeIn(300);
    term == "" ? (term = "a") : "";
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`
    );
    response = await response.json();
    response.meals ? this.displayMeals(response.meals) : this.displayMeals([]);
    $(".inner-loading-screen").fadeOut(500, () => {
      $(".inner-loading-screen").removeClass("d-flex");
    });
  }
  displayMeals(meals) {
    let cartona = "";
    for (let i = 0; i < meals.length && i < 20; i++) {
      cartona += `
      <div class="col-md-3">
              <div
                class="meal bg-danger position-relative overflow-hidden rounded-2" data-id=${meals[i].idMeal}
              >
                <img class="w-100" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" />
                <div
                  class="meal-layer position-absolute top-100 start-0 d-flex align-items-center w-100 h-100 text-black p-2"
                >
                  <h3>${meals[i].strMeal}</h3>
                </div>
              </div>
            </div>
      `;
    }
    $(".firstPage .container .origin").html(cartona);
  }
  displaySearchBars() {
    let cartona = `
    <div class="col-md-5 offset-md-1 offset-2 col-10 mb-3 mb-md-0">
            <input
              class="search-name form-control bg-transparent text-white"
              type="text"
              placeholder="Search By Name"
            />
    </div>
    <div class="offset-2 offset-md-0 col-10 col-md-5">
            <input
              maxlength="1"
              class="search-letter form-control bg-transparent text-white"
              type="text"
              placeholder="Search By First Letter"
            />
    </div>
    `;
    $(".firstPage .container .search-bars").html(cartona);
    $(".firstPage .container .origin").html("");
  }
}
